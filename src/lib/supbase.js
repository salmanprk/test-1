import { createBrowserClient } from "@supabase/ssr";
let url = "https://ccgackrpzsavbgyticoj.supabase.co";
let anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjZ2Fja3JwenNhdmJneXRpY29qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY5ODcwNTEsImV4cCI6MjA0MjU2MzA1MX0.4gNWQKxFnM0i_K4bTChkYDSltsZcdaKLJrqmc28YE5w";
export const supabase = createBrowserClient(url, anon_key);

export async function signOut() {
    await supabase.auth.signOut();
}