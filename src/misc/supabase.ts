import { createClient } from "@supabase/supabase-js";

// Récupération des variables d'environnement
const supabaseUrl: string = "https://psgdcnrjkusodmcxjvuu.supabase.co";
const supabaseAnonPublicKey: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzZ2RjbnJqa3Vzb2RtY3hqdnV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM1NjMyMDgsImV4cCI6MTk5OTEzOTIwOH0.k1Zw3tZ_lgJ9BIC3Wf-XdT3_-ezQOJYkqNVsFPSPyKQ";

console.log(supabaseUrl)
console.log(supabaseAnonPublicKey)

// Création du client 
export const supabase = createClient(supabaseUrl, supabaseAnonPublicKey);
