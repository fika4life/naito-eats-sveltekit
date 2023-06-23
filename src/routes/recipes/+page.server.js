import { supabase } from '$lib/supabase/supabaseClient';

export async function load() {
  const { data } = await supabase.from('recipes').select();
  return {
    recipes: data ?? []
  };
}
