import { supabase } from '$lib/supabase/supabaseClient';

export async function load({ params }) {
  const { data, error } = await supabase
    .from('recipedetails')
    .select()
    .eq('recipe_id', params.recipeId);

  if (error) {
    throw new Error('No ingredients found');
  }

  return {
    recipe: data ?? []
  };
}
