-- Fix security warning: Set search_path for validate_age function
CREATE OR REPLACE FUNCTION public.validate_age()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Check if user is at least 18 years old
  IF NEW.date_of_birth IS NOT NULL AND 
     NEW.date_of_birth > (CURRENT_DATE - INTERVAL '18 years') THEN
    RAISE EXCEPTION 'User must be at least 18 years old to register';
  END IF;
  
  RETURN NEW;
END;
$$;