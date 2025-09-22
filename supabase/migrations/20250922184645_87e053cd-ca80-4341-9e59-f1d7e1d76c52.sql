-- Update products with new Stripe IDs
UPDATE public.products 
SET stripe_product_id = 'prod_T6RdRtuW27FNn1', stripe_price_id = 'price_1SAEkEGlXnAkeFHiNmj0Il2P'
WHERE name = 'Golden Shower IPA';

UPDATE public.products 
SET stripe_product_id = 'prod_T6Rdx8sqL4L0cD', stripe_price_id = 'price_1SAEkXGlXnAkeFHiYtVWOdvr'
WHERE name = 'Red Head IPA';

UPDATE public.products 
SET stripe_product_id = 'prod_T6RemLXBA3mozp', stripe_price_id = 'price_1SAEkoGlXnAkeFHiU3JB0qoj'
WHERE name = 'Bella Negra IPA';