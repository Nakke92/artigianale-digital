-- Add missing fields to profiles table for complete user data
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS date_of_birth DATE,
ADD COLUMN IF NOT EXISTS address TEXT,
ADD COLUMN IF NOT EXISTS city TEXT,
ADD COLUMN IF NOT EXISTS postal_code TEXT,
ADD COLUMN IF NOT EXISTS country TEXT DEFAULT 'IT';

-- Create function to validate age (18+)
CREATE OR REPLACE FUNCTION public.validate_age()
RETURNS TRIGGER AS $$
BEGIN
  -- Check if user is at least 18 years old
  IF NEW.date_of_birth IS NOT NULL AND 
     NEW.date_of_birth > (CURRENT_DATE - INTERVAL '18 years') THEN
    RAISE EXCEPTION 'User must be at least 18 years old to register';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for age validation
DROP TRIGGER IF EXISTS validate_age_trigger ON public.profiles;
CREATE TRIGGER validate_age_trigger
  BEFORE INSERT OR UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.validate_age();