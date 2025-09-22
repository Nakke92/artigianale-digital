-- Add Stripe integration columns to products table
ALTER TABLE public.products 
ADD COLUMN IF NOT EXISTS stripe_product_id TEXT,
ADD COLUMN IF NOT EXISTS stripe_price_id TEXT;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_products_stripe_product_id ON public.products(stripe_product_id);
CREATE INDEX IF NOT EXISTS idx_products_stripe_price_id ON public.products(stripe_price_id);

-- Update existing products with correct Stripe IDs
UPDATE public.products 
SET 
  stripe_product_id = 'prod_T5FsWtyepawfCz',
  stripe_price_id = 'price_1S95NCGlXnAkeFHiWiy3s4tS'
WHERE name = 'Golden Shower IPA';

UPDATE public.products 
SET 
  stripe_product_id = 'prod_T6PW3tGTaWlRQ2',
  stripe_price_id = 'price_1SAChFGlXnAkeFHiArDFAQge'
WHERE name = 'Red Head IPA';

UPDATE public.products 
SET 
  stripe_product_id = 'prod_T6PW3JjbocISeQ',
  stripe_price_id = 'price_1SAChRGlXnAkeFHiE9q6N2kI'
WHERE name = 'Bella Negra IPA';

-- Update handle_new_user function to save all profile fields
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER 
LANGUAGE plpgsql 
SECURITY DEFINER 
SET search_path = public
AS $$
BEGIN
    INSERT INTO public.profiles (
        id, 
        first_name, 
        last_name, 
        phone, 
        date_of_birth, 
        address, 
        city, 
        postal_code, 
        country
    )
    VALUES (
        NEW.id, 
        NEW.raw_user_meta_data ->> 'first_name', 
        NEW.raw_user_meta_data ->> 'last_name',
        NEW.raw_user_meta_data ->> 'phone',
        (NEW.raw_user_meta_data ->> 'date_of_birth')::date,
        NEW.raw_user_meta_data ->> 'address',
        NEW.raw_user_meta_data ->> 'city',
        NEW.raw_user_meta_data ->> 'postal_code',
        COALESCE(NEW.raw_user_meta_data ->> 'country', 'IT')
    );
    RETURN NEW;
END;
$$;