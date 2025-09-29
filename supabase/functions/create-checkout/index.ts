import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

// Input validation schema
const checkoutSchema = {
  items: "array",
  customerInfo: "object|null",
  shippingAddress: "object|null", 
  billingAddress: "object|null",
  promoCode: "string|null"
};

// Rate limiting map (simple in-memory rate limiting)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX = 10; // 10 requests per minute per IP

function validateInput(body: any): boolean {
  if (!body || typeof body !== 'object') return false;
  if (!Array.isArray(body.items) || body.items.length === 0) return false;
  for (const item of body.items) {
    if (!item.product_id || !item.quantity || item.quantity <= 0) return false;
  }
  return true;
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const existing = rateLimitMap.get(ip);
  
  if (!existing || now > existing.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (existing.count >= RATE_LIMIT_MAX) {
    return false;
  }
  
  existing.count++;
  return true;
}

function generateSessionToken(): string {
  return crypto.randomUUID();
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting by IP
    const clientIP = req.headers.get("x-forwarded-for") || req.headers.get("cf-connecting-ip") || "unknown";
    if (!checkRateLimit(clientIP)) {
      return new Response(JSON.stringify({ error: "Rate limit exceeded" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 429,
      });
    }

    const body = await req.json();
    
    // Input validation
    if (!validateInput(body)) {
      return new Response(JSON.stringify({ error: "Invalid input data" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      });
    }

    const { items, customerInfo, shippingAddress, billingAddress, promoCode } = body;

    // For guest users, customerInfo will be null - Stripe will collect the info
    // For registered users, customerInfo will contain their details

    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    let customerId = null;
    let isAuthenticatedUser = false;
    let sessionToken = null;
    
    // Check if user is authenticated
    const authHeader = req.headers.get("Authorization");
    if (authHeader) {
      try {
        const token = authHeader.replace("Bearer ", "");
        const { data } = await supabaseClient.auth.getUser(token);
        const user = data.user;
        
        if (user?.email) {
          isAuthenticatedUser = true;
          // Check if Stripe customer exists
          const customers = await stripe.customers.list({ email: user.email, limit: 1 });
          if (customers.data.length > 0) {
            customerId = customers.data[0].id;
          } else {
            // Create new customer
            const customer = await stripe.customers.create({
              email: user.email,
              name: customerInfo?.name || '',
              phone: customerInfo?.phone || '',
            });
            customerId = customer.id;
          }
        }
      } catch (error) {
        // Secure logging: no sensitive data exposed
        console.log("Authentication failed, proceeding as guest");
        isAuthenticatedUser = false;
      }
    }

    // Generate session token for guest users
    if (!isAuthenticatedUser) {
      sessionToken = generateSessionToken();
    }

    // For guest users, don't try to create customer records
    // Stripe will handle guest checkout collection

    // Get products with Stripe price IDs and calculate totals
    let subtotal = 0;
    const lineItems = [];
    
    for (const item of items) {
      // Get product from database to retrieve Stripe price_id
      const { data: product, error: productError } = await supabaseClient
        .from('products')
        .select('stripe_price_id, name, price')
        .eq('id', item.product_id)
        .single();
      
      if (productError || !product?.stripe_price_id) {
        throw new Error(`Product not found or missing Stripe price ID for item: ${item.name}`);
      }
      
      subtotal += product.price * item.quantity;
      
      lineItems.push({
        price: product.stripe_price_id,
        quantity: item.quantity,
      });
    }

    // Create shipping options based on cart total
    const shippingCost = subtotal >= 50 ? 0 : 5; // Free shipping over €50
    const shippingOptions = [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: shippingCost * 100, // Convert to cents
            currency: 'eur',
          },
          display_name: shippingCost === 0 ? 'Spedizione Gratuita' : 'Spedizione Standard',
        },
      },
    ];

    // Create checkout session
    const sessionConfig: any = {
      line_items: lineItems,
      mode: "payment",
      success_url: `${req.headers.get("origin")}/successo?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/carrello`,
      shipping_address_collection: {
        allowed_countries: ['IT'],
      },
      billing_address_collection: 'required',
      payment_method_types: ['card'],
      shipping_options: shippingOptions,
      allow_promotion_codes: true,
      metadata: {
        promo_code: promoCode || '',
        items_count: items.length.toString(),
        subtotal: subtotal.toString(),
        session_token: sessionToken || '',
        user_authenticated: isAuthenticatedUser.toString(),
      },
    };

    // Add customer info - only one of customer or customer_email, not both
    if (customerId) {
      sessionConfig.customer = customerId;
    } else if (customerInfo?.email) {
      sessionConfig.customer_email = customerInfo.email;
    }
    // If no customer info, Stripe will collect it during checkout

    const session = await stripe.checkout.sessions.create(sessionConfig);

    return new Response(JSON.stringify({ 
      url: session.url, 
      sessionToken: sessionToken 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    // Secure error logging - no sensitive data exposed
    console.error("Checkout session creation failed:", error instanceof Error ? error.message : "Unknown error");
    return new Response(JSON.stringify({ error: "Failed to create checkout session" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});