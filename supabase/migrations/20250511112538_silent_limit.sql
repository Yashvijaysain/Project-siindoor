/*
  # Create contact form table

  1. New Tables
    - `contact_forms`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `message` (text, required)
      - `created_at` (timestamp with timezone)
      - `user_id` (uuid, references auth.users)

  2. Security
    - Enable RLS on `contact_forms` table
    - Add policy for authenticated users to insert their own data
    - Add policy for authenticated users to read their own data
*/

BEGIN;

-- Create the contact_forms table
CREATE TABLE IF NOT EXISTS public.contact_forms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.contact_forms ENABLE ROW LEVEL SECURITY;

-- Create policies
DO $$ 
BEGIN
  -- Drop existing policies if they exist
  DROP POLICY IF EXISTS "Users can insert their own contact form submissions" ON public.contact_forms;
  DROP POLICY IF EXISTS "Users can read their own contact form submissions" ON public.contact_forms;
  
  -- Create new policies
  CREATE POLICY "Users can insert their own contact form submissions"
    ON public.contact_forms
    FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = user_id);

  CREATE POLICY "Users can read their own contact form submissions"
    ON public.contact_forms
    FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);
END $$;

COMMIT;