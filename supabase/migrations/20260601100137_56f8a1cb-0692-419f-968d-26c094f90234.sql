-- Create table for enquiries
CREATE TABLE public.enquiries (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    enquiry_type TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Grant permissions
GRANT INSERT ON public.enquiries TO anon, authenticated;
GRANT SELECT ON public.enquiries TO authenticated;
GRANT ALL ON public.enquiries TO service_role;

-- Enable RLS
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- Create policy for public submissions
CREATE POLICY "Anyone can submit enquiries" 
ON public.enquiries 
FOR INSERT 
WITH CHECK (true);

-- Create policy for authenticated users to view
CREATE POLICY "Authenticated users can view enquiries" 
ON public.enquiries 
FOR SELECT 
TO authenticated 
USING (true);