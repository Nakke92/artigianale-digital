-- Create secure customer data table with strong RLS
CREATE TABLE public.customer_data (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID NOT NULL,
  customer_email TEXT,
  customer_phone TEXT,
  shipping_address JSONB,
  billing_address JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS with strict access control
ALTER TABLE public.customer_data ENABLE ROW LEVEL SECURITY;

-- Create policies that only allow access via authenticated users or secure edge functions
CREATE POLICY "Service role can access customer data" 
ON public.customer_data 
FOR ALL 
USING (auth.jwt() ->> 'role' = 'service_role');

CREATE POLICY "Authenticated users can view their own customer data" 
ON public.customer_data 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.orders 
    WHERE orders.id = customer_data.order_id 
    AND orders.user_id = auth.uid()
  )
);

-- Migrate existing customer data from orders table
INSERT INTO public.customer_data (order_id, customer_email, customer_phone, shipping_address, billing_address)
SELECT id, customer_email, customer_phone, shipping_address, billing_address 
FROM public.orders 
WHERE customer_email IS NOT NULL OR customer_phone IS NOT NULL OR shipping_address IS NOT NULL OR billing_address IS NOT NULL;

-- Remove sensitive data from orders table
ALTER TABLE public.orders DROP COLUMN customer_email;
ALTER TABLE public.orders DROP COLUMN customer_phone;
ALTER TABLE public.orders DROP COLUMN shipping_address;
ALTER TABLE public.orders DROP COLUMN billing_address;

-- Create trigger for updated_at on customer_data
CREATE TRIGGER update_customer_data_updated_at
BEFORE UPDATE ON public.customer_data
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for better performance
CREATE INDEX idx_customer_data_order_id ON public.customer_data(order_id);