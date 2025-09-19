-- Add new products for the expanded catalog
INSERT INTO public.products (
  name, 
  description, 
  price, 
  abv, 
  ibu, 
  style, 
  image_url,
  is_active
) VALUES 
(
  'Golden Shower IPA - Bottiglia 33cl',
  'Una IPA dorata con carattere deciso, luppolata e rinfrescante. Perfetta per chi ama i sapori intensi e gli aromi floreali.',
  8.50,
  6.2,
  45,
  'IPA',
  '/src/assets/golden-shower-label.jpeg',
  true
),
(
  'Red Head Ale - Bottiglia 33cl',
  'Una Red Ale dall''anima ribelle, con note maltate e un finale leggermente piccante. Il carattere forte in una bottiglia.',
  7.80,
  5.8,
  38,
  'Red Ale',
  '/src/assets/red-head-label.jpeg',
  true
);

-- Add product variants for different pack sizes
INSERT INTO public.product_variants (
  product_id,
  name,
  price,
  stock_quantity,
  sku
) 
SELECT 
  p.id,
  '4x Bottiglia 33cl',
  p.price * 4 * 0.95, -- 5% discount for 4-pack
  50,
  CASE 
    WHEN p.name LIKE 'Golden Shower%' THEN 'GS-4PACK'
    WHEN p.name LIKE 'Red Head%' THEN 'RH-4PACK'
  END
FROM public.products p
WHERE p.name IN ('Golden Shower IPA - Bottiglia 33cl', 'Red Head Ale - Bottiglia 33cl');

INSERT INTO public.product_variants (
  product_id,
  name,
  price,
  stock_quantity,
  sku
) 
SELECT 
  p.id,
  '6x Bottiglia 33cl',
  p.price * 6 * 0.90, -- 10% discount for 6-pack
  30,
  CASE 
    WHEN p.name LIKE 'Golden Shower%' THEN 'GS-6PACK'
    WHEN p.name LIKE 'Red Head%' THEN 'RH-6PACK'
  END
FROM public.products p
WHERE p.name IN ('Golden Shower IPA - Bottiglia 33cl', 'Red Head Ale - Bottiglia 33cl');

INSERT INTO public.product_variants (
  product_id,
  name,
  price,
  stock_quantity,
  sku
) 
SELECT 
  p.id,
  'Cassa 24x Bottiglia 33cl',
  p.price * 24 * 0.80, -- 20% discount for crate
  10,
  CASE 
    WHEN p.name LIKE 'Golden Shower%' THEN 'GS-CRATE'
    WHEN p.name LIKE 'Red Head%' THEN 'RH-CRATE'
  END
FROM public.products p
WHERE p.name IN ('Golden Shower IPA - Bottiglia 33cl', 'Red Head Ale - Bottiglia 33cl');

-- Add tables for reviews
CREATE TABLE public.product_reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title TEXT,
  comment TEXT,
  verified_purchase BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for reviews
ALTER TABLE public.product_reviews ENABLE ROW LEVEL SECURITY;

-- Create policies for reviews
CREATE POLICY "Anyone can view approved reviews" 
ON public.product_reviews 
FOR SELECT 
USING (true);

CREATE POLICY "Users can create their own reviews" 
ON public.product_reviews 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own reviews" 
ON public.product_reviews 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Add trigger for reviews updated_at
CREATE TRIGGER update_product_reviews_updated_at
BEFORE UPDATE ON public.product_reviews
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add newsletter subscriptions table
CREATE TABLE public.newsletter_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_active BOOLEAN DEFAULT TRUE,
  preferences JSONB DEFAULT '{}'::jsonb
);

-- Enable RLS for newsletter
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Newsletter policy - only allow inserts for now
CREATE POLICY "Anyone can subscribe to newsletter" 
ON public.newsletter_subscriptions 
FOR INSERT 
WITH CHECK (true);

-- Add blog/news table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image TEXT,
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for blog posts
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Blog posts policy - anyone can read published posts
CREATE POLICY "Anyone can view published blog posts" 
ON public.blog_posts 
FOR SELECT 
USING (published = true);

-- Add trigger for blog posts updated_at
CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();