-- Add session-based protection for guest orders
ALTER TABLE public.orders ADD COLUMN session_token TEXT;

-- Create index for performance on session_token lookups
CREATE INDEX idx_orders_session_token ON public.orders(session_token) WHERE session_token IS NOT NULL;

-- Drop existing RLS policies to recreate them with session support
DROP POLICY IF EXISTS "Users can view their own orders" ON public.orders;
DROP POLICY IF EXISTS "Users can create their own orders" ON public.orders;
DROP POLICY IF EXISTS "Users can update their own orders" ON public.orders;

-- Create new RLS policies that support both authenticated and session-based access
CREATE POLICY "Users can view their own orders or guest orders with session token"
ON public.orders FOR SELECT
USING (
  (auth.uid() IS NOT NULL AND auth.uid() = user_id) OR 
  (user_id IS NULL AND session_token IS NOT NULL AND session_token = current_setting('app.session_token', true))
);

CREATE POLICY "Users can create their own orders or guest orders"
ON public.orders FOR INSERT
WITH CHECK (
  (auth.uid() IS NOT NULL AND auth.uid() = user_id) OR 
  (user_id IS NULL AND session_token IS NOT NULL)
);

CREATE POLICY "Users can update their own orders or guest orders with session token"
ON public.orders FOR UPDATE
USING (
  (auth.uid() IS NOT NULL AND auth.uid() = user_id) OR 
  (user_id IS NULL AND session_token IS NOT NULL AND session_token = current_setting('app.session_token', true))
);

-- Create function to set session token for guest access
CREATE OR REPLACE FUNCTION public.set_guest_session_token(token TEXT)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Set session-level variable for guest access
  PERFORM set_config('app.session_token', token, false);
END;
$$;