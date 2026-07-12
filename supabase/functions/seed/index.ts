import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const SAMPLE_LEADS = [
  { name: "Sarah Johnson", email: "sarah.johnson@techcorp.io", phone: "+1 415-555-0101", company: "TechCorp Solutions", source: "Website", status: "New" },
  { name: "Michael Chen", email: "m.chen@innovate.dev", phone: "+1 206-555-0142", company: "Innovate Labs", source: "Referral", status: "Contacted" },
  { name: "Emily Rodriguez", email: "emily.r@brightpath.co", phone: "+1 312-555-0178", company: "BrightPath Media", source: "LinkedIn", status: "Converted" },
  { name: "David Kim", email: "dkim@nexustech.com", phone: "+1 646-555-0199", company: "Nexus Technologies", source: "Website", status: "New" },
  { name: "Jessica Williams", email: "j.williams@flowstate.app", phone: "+1 503-555-0123", company: "FlowState Software", source: "Google Ads", status: "Contacted" },
  { name: "Robert Martinez", email: "robert.m@summitventures.io", phone: "+1 720-555-0156", company: "Summit Ventures", source: "Webinar", status: "New" },
  { name: "Amanda Foster", email: "afoster@cedardigital.net", phone: "+1 404-555-0187", company: "Cedar Digital Agency", source: "Referral", status: "Converted" },
  { name: "James Wilson", email: "jwilson@peakperformance.co", phone: "+1 617-555-0144", company: "Peak Performance Group", source: "LinkedIn", status: "Contacted" },
  { name: "Lisa Anderson", email: "l.anderson@cloudwise.io", phone: "+1 415-555-0167", company: "CloudWise Systems", source: "Website", status: "New" },
  { name: "Daniel Thompson", email: "dthompson@meridianlabs.dev", phone: "+1 512-555-0133", company: "Meridian Labs", source: "Google Ads", status: "New" },
  { name: "Nicole Garcia", email: "nicole.g@vantagepoint.co", phone: "+1 305-555-0171", company: "VantagePoint Consulting", source: "Referral", status: "Contacted" },
  { name: "Christopher Lee", email: "clee@apexinnovations.io", phone: "+1 213-555-0188", company: "Apex Innovations", source: "Webinar", status: "New" },
  { name: "Rachel Green", email: "rachel.green@horizonscope.net", phone: "+1 415-555-0119", company: "HorizonScope Analytics", source: "LinkedIn", status: "Converted" },
  { name: "Kevin Patel", email: "kpatel@quantumleap.dev", phone: "+1 408-555-0152", company: "QuantumLeap Tech", source: "Website", status: "Contacted" },
  { name: "Michelle Brown", email: "michelle.b@stellarform.co", phone: "+1 628-555-0107", company: "StellarForm Studio", source: "Google Ads", status: "New" },
];

const SAMPLE_NOTES: Record<string, string[]> = {
  "Contacted": ["Initial outreach email sent.", "Phone call scheduled for next week."],
  "Converted": ["Demo call went well, client is interested.", "Contract signed and onboarded successfully."],
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    const results: Record<string, string> = {};

    // 1. Seed default admin via Supabase Auth (password is bcrypt-hashed by Supabase)
    const ADMIN_EMAIL = "admin@leadflow.com";
    const ADMIN_PASSWORD = "Admin@123";

    const { data: existingUsers } = await supabase.auth.admin.listUsers();
    const adminExists = existingUsers?.users?.some((u) => u.email === ADMIN_EMAIL);

    if (!adminExists) {
      const { data: created, error: adminErr } = await supabase.auth.admin.createUser({
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
        email_confirm: true,
        user_metadata: { name: "Admin", role: "admin" },
      });
      if (adminErr) {
        return new Response(JSON.stringify({ error: "Failed to create admin: " + adminErr.message }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      results.admin = "Created default admin (admin@leadflow.com)";
    } else {
      results.admin = "Admin already exists";
    }

    // 2. Seed sample leads if the table is empty
    const { count } = await supabase.from("leads").select("*", { count: "exact", head: true });
    if (count === 0) {
      const rows = SAMPLE_LEADS.map((l) => ({
        name: l.name,
        email: l.email,
        phone: l.phone,
        company: l.company,
        source: l.source,
        status: l.status,
        notes: (SAMPLE_NOTES[l.status] || []).map((text) => ({
          text,
          createdAt: new Date().toISOString(),
        })),
      }));
      const { error: leadErr } = await supabase.from("leads").insert(rows);
      if (leadErr) {
        return new Response(JSON.stringify({ error: "Failed to seed leads: " + leadErr.message }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      results.leads = "Seeded 15 sample leads";
    } else {
      results.leads = `Leads table already has ${count} rows`;
    }

    return new Response(JSON.stringify({ success: true, results }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
