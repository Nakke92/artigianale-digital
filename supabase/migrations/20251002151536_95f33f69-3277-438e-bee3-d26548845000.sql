-- PASSO 1: Rimuovo le policy che dipendono dalla vecchia funzione is_admin()
DROP POLICY IF EXISTS "Admins can view all orders" ON public.orders;
DROP POLICY IF EXISTS "Admins can manage products" ON public.products;
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;

-- PASSO 2: Ora posso rimuovere la funzione is_admin()
DROP FUNCTION IF EXISTS public.is_admin();

-- PASSO 3: Rimuovo la colonna is_admin dalla tabella profiles
ALTER TABLE public.profiles DROP COLUMN IF EXISTS is_admin;

-- PASSO 4: Creo l'enum per i ruoli applicativi
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- PASSO 5: Creo la tabella user_roles (separata e protetta)
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role public.app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    UNIQUE (user_id, role)
);

-- PASSO 6: Abilito RLS sulla tabella user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- PASSO 7: Policy - Solo service role può gestire i ruoli (previene auto-assegnazione)
CREATE POLICY "Only service role can manage user roles"
ON public.user_roles
FOR ALL
USING ((auth.jwt() ->> 'role'::text) = 'service_role'::text);

-- PASSO 8: Creo la funzione has_role sicura con SECURITY DEFINER e search_path fisso
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- PASSO 9: Ricreo le policy admin usando la nuova funzione sicura
CREATE POLICY "Admins can view all orders"
ON public.orders
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage products"
ON public.products
FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can view all profiles"
ON public.profiles
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- PASSO 10: Assegno il ruolo admin all'utente admin@goldenshower.beer
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role FROM auth.users WHERE email = 'admin@goldenshower.beer'
ON CONFLICT (user_id, role) DO NOTHING;