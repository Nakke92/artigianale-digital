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
    const { session_id } = await req.json();

    if (!session_id) {
      return new Response(JSON.stringify({ error: "Missing session ID" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      });
    }

    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Retrieve the checkout session
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ['line_items', 'customer'],
    });

    if (session.payment_status !== 'paid') {
      return new Response(JSON.stringify({ error: "Payment not completed" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      });
    }

    // Get user from auth header and handle session token for guests
    let userId = null;
    let sessionToken = null;
    const authHeader = req.headers.get("Authorization");
    if (authHeader) {
      try {
        const token = authHeader.replace("Bearer ", "");
        const { data } = await supabaseClient.auth.getUser(token);
        userId = data.user?.id;
      } catch (error) {
        console.log("Authentication failed, checking for guest session");
      }
    }

    // Extract session token from metadata for guest orders
    sessionToken = session.metadata?.session_token || null;

    // Calculate totals from session
    const subtotal = session.amount_subtotal! / 100;
    const totalAmount = session.amount_total! / 100;
    const taxAmount = (session.total_details?.amount_tax || 0) / 100;
    const shippingAmount = session.shipping_cost?.amount_total ? session.shipping_cost.amount_total / 100 : 0;

    // Create order in database with session token support (without sensitive data)
    const orderData: any = {
      user_id: userId,
      stripe_payment_intent_id: session.payment_intent,
      status: 'paid',
      subtotal,
      tax_amount: taxAmount,
      shipping_amount: shippingAmount,
      total_amount: totalAmount,
      currency: session.currency?.toUpperCase() || 'EUR',
      promo_code: session.metadata?.promo_code || null,
    };

    // Add session token for guest orders
    if (!userId && sessionToken) {
      orderData.session_token = sessionToken;
    }

    const { data: order, error: orderError } = await supabaseClient
      .from('orders')
      .insert(orderData)
      .select()
      .single();

    if (orderError) {
      console.error("Order creation failed:", orderError.code || "Unknown error");
      return new Response(JSON.stringify({ error: "Failed to create order" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      });
    }

    // Create customer data entry separately with proper access control
    const customerData = {
      order_id: order.id,
      customer_email: session.customer_details?.email || session.customer_email,
      customer_phone: session.customer_details?.phone,
      shipping_address: session.shipping_details?.address,
      billing_address: session.customer_details?.address,
    };

    const { error: customerDataError } = await supabaseClient
      .from('customer_data')
      .insert(customerData);

    if (customerDataError) {
      console.error("Customer data creation failed:", customerDataError.code || "Unknown error");
      // Continue execution as this is not critical for order completion
    }

    // Create order items with real product mapping
    if (session.line_items?.data) {
      for (const item of session.line_items.data) {
        // Skip if this is not a product line item (could be shipping, tax, etc.)
        if (!item.price?.id) continue;
        
        // Find the product by Stripe price ID
        const { data: product, error: productError } = await supabaseClient
          .from('products')
          .select('id, name, price')
          .eq('stripe_price_id', item.price.id)
          .single();
        
        if (productError || !product) {
          console.warn(`Product mapping failed for Stripe price ID: ${item.price.id}`);
          continue;
        }
        
        // Insert order item with real product data
        const { error: itemError } = await supabaseClient
          .from('order_items')
          .insert({
            order_id: order.id,
            product_id: product.id,
            quantity: item.quantity || 1,
            unit_price: product.price,
            total_price: product.price * (item.quantity || 1),
          });
        
        if (itemError) {
          console.error(`Order item creation failed for product ${product.id}:`, itemError.code || "Unknown error");
        }
      }
    }

    return new Response(JSON.stringify({ 
      success: true, 
      order_id: order.id,
      order 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    console.error("Payment processing failed:", error instanceof Error ? error.message : "Unknown error");
    return new Response(JSON.stringify({ error: "Payment processing failed" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});