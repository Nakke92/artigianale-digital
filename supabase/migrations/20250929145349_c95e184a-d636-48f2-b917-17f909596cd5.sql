-- Remove the overly permissive RLS policy that allows any authenticated user to see all promo codes
DROP POLICY IF EXISTS "Promo codes are viewable by authenticated users" ON public.promo_codes;

-- Create a secure function to validate and retrieve a specific promo code
-- This function uses SECURITY DEFINER to bypass RLS but only returns data for valid codes
CREATE OR REPLACE FUNCTION public.validate_promo_code(input_code text)
RETURNS TABLE (
  id uuid,
  code text,
  description text,
  discount_type text,
  discount_value numeric,
  min_order_amount numeric,
  expires_at timestamp with time zone,
  usage_limit integer,
  used_count integer,
  is_valid boolean,
  error_message text
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  promo_record RECORD;
BEGIN
  -- Find the promo code (case insensitive)
  SELECT * INTO promo_record
  FROM public.promo_codes 
  WHERE UPPER(public.promo_codes.code) = UPPER(input_code)
  AND is_active = true;
  
  -- If no code found
  IF NOT FOUND THEN
    RETURN QUERY SELECT 
      NULL::uuid, NULL::text, NULL::text, NULL::text, NULL::numeric, NULL::numeric,
      NULL::timestamp with time zone, NULL::integer, NULL::integer,
      false, 'Invalid promo code'::text;
    RETURN;
  END IF;
  
  -- Check if expired
  IF promo_record.expires_at IS NOT NULL AND promo_record.expires_at < NOW() THEN
    RETURN QUERY SELECT 
      promo_record.id, promo_record.code, promo_record.description, 
      promo_record.discount_type, promo_record.discount_value, promo_record.min_order_amount,
      promo_record.expires_at, promo_record.usage_limit, promo_record.used_count,
      false, 'Promo code has expired'::text;
    RETURN;
  END IF;
  
  -- Check usage limit
  IF promo_record.usage_limit IS NOT NULL AND promo_record.used_count >= promo_record.usage_limit THEN
    RETURN QUERY SELECT 
      promo_record.id, promo_record.code, promo_record.description, 
      promo_record.discount_type, promo_record.discount_value, promo_record.min_order_amount,
      promo_record.expires_at, promo_record.usage_limit, promo_record.used_count,
      false, 'Promo code usage limit reached'::text;
    RETURN;
  END IF;
  
  -- Code is valid
  RETURN QUERY SELECT 
    promo_record.id, promo_record.code, promo_record.description, 
    promo_record.discount_type, promo_record.discount_value, promo_record.min_order_amount,
    promo_record.expires_at, promo_record.usage_limit, promo_record.used_count,
    true, NULL::text;
END;
$$;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION public.validate_promo_code(text) TO authenticated;

-- Create a restrictive policy that prevents direct SELECT on promo_codes table
-- Only admins should be able to directly query promo codes for management purposes
CREATE POLICY "Only service role can access promo codes directly" 
ON public.promo_codes 
FOR ALL 
USING (false) 
WITH CHECK (false);

-- Add comment explaining the security approach
COMMENT ON FUNCTION public.validate_promo_code(text) IS 
'Securely validates promo codes without exposing all codes. Only returns specific code data when validating, preventing enumeration attacks.';