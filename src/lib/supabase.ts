import { createClient } from '@supabase/supabase-js';

// Get environment variables for Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create Supabase client only if configuration exists
export const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

// Flag indicating whether Supabase is properly configured
export const isSupabaseConfigured = Boolean(supabase);

// Helper function to safely get the Supabase client
export function getSupabaseClient() {
  if (!supabase) {
    throw new Error('Supabase client not initialized. Please connect to Supabase first.');
  }
  return supabase;
}