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

    // Get user from auth header
    let userId = null;
    const authHeader = req.headers.get("Authorization");
    if (authHeader) {
      try {
        const token = authHeader.replace("Bearer ", "");
        const { data } = await supabaseClient.auth.getUser(token);
        userId = data.user?.id;
      } catch (error) {
        console.log("Auth error:", error);
      }
    }

    // Calculate totals from session
    const subtotal = session.amount_subtotal! / 100;
    const totalAmount = session.amount_total! / 100;
    const taxAmount = (session.total_details?.amount_tax || 0) / 100;
    const shippingAmount = session.shipping_cost?.amount_total ? session.shipping_cost.amount_total / 100 : 0;

    // Create order in database
    const { data: order, error: orderError } = await supabaseClient
      .from('orders')
      .insert({
        user_id: userId,
        stripe_payment_intent_id: session.payment_intent,
        status: 'paid',
        subtotal,
        tax_amount: taxAmount,
        shipping_amount: shippingAmount,
        total_amount: totalAmount,
        currency: session.currency?.toUpperCase() || 'EUR',
        shipping_address: session.shipping_details?.address,
        billing_address: session.customer_details?.address,
        customer_email: session.customer_details?.email || session.customer_email,
        customer_phone: session.customer_details?.phone,
        promo_code: session.metadata?.promo_code || null,
      })
      .select()
      .single();

    if (orderError) {
      console.error("Error creating order:", orderError);
      return new Response(JSON.stringify({ error: "Failed to create order" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      });
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
          console.warn(`Product not found for Stripe price ID: ${item.price.id}`);
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
          console.error(`Error creating order item for product ${product.id}:`, itemError);
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
    console.error("Error processing payment success:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});