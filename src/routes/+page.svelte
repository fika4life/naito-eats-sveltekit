<script>
    export let data;
    let { recipes } = data;
    $: ({ recipes } = data);
    
    import RecipeCard from "$lib/components/RecipeCard.svelte";
    import RecipeGrid from "$lib/components/RecipeGrid.svelte";
  </script>
  
  <h1 class="text-4xl">Most recent recipes</h1>
  <RecipeGrid>
  {#each recipes as recipe}
    <RecipeCard recipe={recipe}></RecipeCard>
  {/each}
  </RecipeGrid>
  