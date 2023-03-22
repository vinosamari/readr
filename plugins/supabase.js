import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const SUPA = createClient(
  "https://gfzmajhpuunnvprzyufl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdmem1hamhwdXVubnZwcnp5dWZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk0OTg4MzgsImV4cCI6MTk5NTA3NDgzOH0.Ce_4mgt5biv1jV01bi8THvigUrSgvZgBNH3Tvb2tTJI"
);
