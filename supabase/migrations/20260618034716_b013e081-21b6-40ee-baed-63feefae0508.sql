
-- 1. Lock down SECURITY DEFINER helper functions: only service_role (edge functions) needs them.
REVOKE EXECUTE ON FUNCTION public.enqueue_email(text, jsonb) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.delete_email(text, bigint) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.read_email_batch(text, integer, integer) FROM PUBLIC, anon, authenticated;

GRANT EXECUTE ON FUNCTION public.enqueue_email(text, jsonb) TO service_role;
GRANT EXECUTE ON FUNCTION public.delete_email(text, bigint) TO service_role;
GRANT EXECUTE ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) TO service_role;
GRANT EXECUTE ON FUNCTION public.read_email_batch(text, integer, integer) TO service_role;

-- 2. Pin search_path on all SECURITY DEFINER functions to prevent search_path hijacking.
ALTER FUNCTION public.enqueue_email(text, jsonb) SET search_path = public, pgmq;
ALTER FUNCTION public.delete_email(text, bigint) SET search_path = public, pgmq;
ALTER FUNCTION public.move_to_dlq(text, text, bigint, jsonb) SET search_path = public, pgmq;
ALTER FUNCTION public.read_email_batch(text, integer, integer) SET search_path = public, pgmq;

-- 3. Tighten the "Anyone can submit enquiries" policy: replace WITH CHECK (true) with
--    basic content validation so anonymous submitters can't insert empty/oversized rows.
DROP POLICY IF EXISTS "Anyone can submit enquiries" ON public.enquiries;
CREATE POLICY "Anyone can submit enquiries"
ON public.enquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(name))    BETWEEN 1 AND 200
  AND length(btrim(email)) BETWEEN 3 AND 320
  AND email LIKE '%_@_%.__%'
  AND length(btrim(phone)) BETWEEN 1 AND 50
  AND length(btrim(enquiry_type)) BETWEEN 1 AND 100
  AND length(btrim(message)) BETWEEN 1 AND 5000
);
