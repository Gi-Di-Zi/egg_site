import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.VUE_APP_SUPABASE_URL;
const supabaseKey = process.env.VUE_APP_SUPABASE_KEY;
const anonKey = process.env.VUE_APP_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
export const supaStorage = createClient(supabaseUrl, anonKey);
