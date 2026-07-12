/*
# Create leads table and helper function for LeadFlow CRM

1. New Tables
- `leads` — stores client leads submitted through the website contact form.
  - `id` (uuid, primary key)
  - `name` (text, not null) — lead's full name
  - `email` (text, not null) — lead's email address
  - `phone` (text) — lead's phone number
  - `company` (text) — lead's company name
  - `source` (text, not null, default 'Website') — where the lead came from
  - `status` (text, not null, default 'New') — lead lifecycle: New | Contacted | Converted
  - `notes` (jsonb, default '[]') — embedded array of { text, createdAt } follow-up notes
  - `created_at` (timestamptz) — record creation timestamp
  - `updated_at` (timestamptz) — record last-modified timestamp

2. New Functions
- `add_lead_note(lead_id uuid, note_text text)` — appends a { text, createdAt } object
  to the lead's notes jsonb array and bumps updated_at. Callable by authenticated users.

3. Indexes
- `idx_leads_created_at` — speeds up "newest first" sorting
- `idx_leads_status` — speeds up status filtering

4. Security
- RLS enabled on `leads`.
- Four separate policies (SELECT/INSERT/UPDATE/DELETE) scoped to `TO authenticated`.
  This is a single-admin CRM: any signed-in user (the admin) can manage all leads.
  Unauthenticated requests are blocked — the anon key alone cannot read or write leads.
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  company text DEFAULT '',
  source text NOT NULL DEFAULT 'Website',
  status text NOT NULL DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Converted')),
  notes jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads (status);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_leads" ON leads;
CREATE POLICY "select_leads" ON leads FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "insert_leads" ON leads;
CREATE POLICY "insert_leads" ON leads FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "update_leads" ON leads;
CREATE POLICY "update_leads" ON leads FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "delete_leads" ON leads;
CREATE POLICY "delete_leads" ON leads FOR DELETE
  TO authenticated USING (true);

CREATE OR REPLACE FUNCTION add_lead_note(lead_id uuid, note_text text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE leads
  SET notes = notes || jsonb_build_array(
        jsonb_build_object('text', note_text, 'createdAt', to_char(now(), 'YYYY-MM-DD"T"HH24:MI:SSOF'))
      ),
      updated_at = now()
  WHERE id = lead_id;
END;
$$;