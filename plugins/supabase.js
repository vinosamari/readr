import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const SUPA = createClient(
  "https://kjklprepamtfqqslgrlw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtqa2xwcmVwYW10ZnFxc2xncmx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkyMzMwNDYsImV4cCI6MTk5NDgwOTA0Nn0.aD9Rsh9zwzzHK2fyaSMgQg4BeDlfnG497rNKfEUVNLA"
);

console.log(`SUPA IS ${SUPA}`);
