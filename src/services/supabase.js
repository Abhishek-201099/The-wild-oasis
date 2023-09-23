import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yieekhqmylczrqjeigng.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpZWVraHFteWxjenJxamVpZ25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0NzkxMzUsImV4cCI6MjAxMTA1NTEzNX0.CobHcxh8Nfy27KDE0OLqN0Y65GwoLkvbpLeI1sh9hqc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
