DROP POLICY IF EXISTS "Authenticated users can view enquiries" ON public.enquiries;
REVOKE SELECT ON public.enquiries FROM authenticated, anon;