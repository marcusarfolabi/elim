import {
  createClient as createSupabaseClient,
  SupabaseClient,
} from "@supabase/supabase-js";

// 1. Create a variable outside the function to hold our single instance
let supabaseInstance: SupabaseClient | null = null;

export const createClient = () => {
  // 2. If an instance already exists, return it instead of creating a new one
  if (supabaseInstance) return supabaseInstance;

  // 3. Otherwise, create it for the first time
  supabaseInstance = createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
        storageKey: "sb-testimony-lock-fix",
      },
    },
  );

  return supabaseInstance;
};
