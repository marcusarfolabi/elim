ALTER TABLE public.testimonies ENABLE ROW LEVEL SECURITY;

REVOKE SELECT ON TABLE public.testimonies
FROM PUBLIC, anon, authenticated;

REVOKE SELECT (email, phone) ON TABLE public.testimonies
FROM PUBLIC, anon, authenticated;

GRANT SELECT (id, name, category, title, testimony, can_share, created_at)
ON TABLE public.testimonies
TO anon, authenticated;

DROP POLICY IF EXISTS "Public can read shared testimonies"
ON public.testimonies;

CREATE POLICY "Public can read shared testimonies"
ON public.testimonies
FOR SELECT
TO anon, authenticated
USING (can_share = 'yes');

DROP POLICY IF EXISTS "Public can submit testimonies"
ON public.testimonies;

CREATE POLICY "Public can submit testimonies"
ON public.testimonies
FOR INSERT
TO anon
WITH CHECK (can_share IN ('yes', 'no'));

DROP POLICY IF EXISTS "Only shared testimonies are publicly readable"
ON public.testimonies;

CREATE POLICY "Only shared testimonies are publicly readable"
ON public.testimonies
AS RESTRICTIVE
FOR SELECT
TO anon, authenticated
USING (can_share = 'yes');
