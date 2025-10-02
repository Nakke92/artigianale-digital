-- Add RLS policies for guest orders in customer_data table
-- Allow authenticated users to view their own data
CREATE POLICY "Users can view their own customer data"
ON public.customer_data
FOR SELECT
USING (
  auth.uid() IS NOT NULL 
  AND EXISTS (
    SELECT 1 FROM public.orders 
    WHERE orders.id = customer_data.order_id 
    AND orders.user_id = auth.uid()
  )
);

-- Allow guest users to view their own data using session token
CREATE POLICY "Guests can view their customer data via session token"
ON public.customer_data
FOR SELECT
USING (
  auth.uid() IS NULL 
  AND EXISTS (
    SELECT 1 FROM public.orders 
    WHERE orders.id = customer_data.order_id 
    AND orders.session_token = current_setting('app.session_token', true)
  )
);

-- Add RLS policies for guest orders in order_items table
-- Allow authenticated users to view their own order items
CREATE POLICY "Users can view their own order items"
ON public.order_items
FOR SELECT
USING (
  auth.uid() IS NOT NULL 
  AND EXISTS (
    SELECT 1 FROM public.orders 
    WHERE orders.id = order_items.order_id 
    AND orders.user_id = auth.uid()
  )
);

-- Allow guest users to view their order items via session token
CREATE POLICY "Guests can view their order items via session token"
ON public.order_items
FOR SELECT
USING (
  auth.uid() IS NULL 
  AND EXISTS (
    SELECT 1 FROM public.orders 
    WHERE orders.id = order_items.order_id 
    AND orders.session_token = current_setting('app.session_token', true)
  )
);

-- Add admin role to profiles table for proper role-based access
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS is_admin BOOLEAN DEFAULT FALSE;

-- Create admin check function
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND is_admin = TRUE
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Add admin policies for orders table
CREATE POLICY "Admins can view all orders"
ON public.orders
FOR SELECT
USING (public.is_admin());

-- Add admin policies for products table
CREATE POLICY "Admins can manage products"
ON public.products
FOR ALL
USING (public.is_admin());

-- Add admin policies for profiles table
CREATE POLICY "Admins can view all profiles"
ON public.profiles
FOR SELECT
USING (public.is_admin());