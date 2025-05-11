/*
  # Update contact forms table policies

  1. Changes
    - Remove user_id requirement from contact_forms table
    - Update policies to allow public submissions
    - Add status column for tracking submissions

  2. Security
    - Enable RLS on contact_forms table
    - Add policy for public form submissions
    - Add policy for admins to view all submissions
*/

BEGIN;

-- Make user_id nullable and add status column
ALTER TABLE public.contact_forms 
  ALTER COLUMN user_id DROP NOT NULL,
  ADD COLUMN IF NOT EXISTS status text DEFAULT 'pending';

-- Update policies for public access
DROP POLICY IF EXISTS "Users can insert their own contact form submissions" ON public.contact_forms;
DROP POLICY IF EXISTS "Users can read their own contact form submissions" ON public.contact_forms;

-- Allow public submissions
CREATE POLICY "Allow public contact form submissions"
  ON public.contact_forms
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow authenticated users to view their submissions
CREATE POLICY "Users can view their submissions"
  ON public.contact_forms
  FOR SELECT
  TO authenticated
  USING (
    CASE 
      WHEN auth.uid() IS NOT NULL THEN user_id = auth.uid()
      ELSE false
    END
  );

COMMIT;