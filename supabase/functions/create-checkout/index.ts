import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

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
    const { items, customerInfo, shippingAddress, billingAddress, promoCode } = await req.json();

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
        console.log("Auth error, proceeding as guest:", error);
        isAuthenticatedUser = false;
      }
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

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'An error occurred' }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});