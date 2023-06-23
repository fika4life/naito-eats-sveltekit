<script>
  export let data;
  let { recipes } = data;
  $: ({ recipes } = data);
  
  import RecipeCard from "$lib/components/RecipeCard.svelte";
  import RecipeGrid from "$lib/components/RecipeGrid.svelte";
</script>

<RecipeGrid>
{#each recipes as recipe}
  <RecipeCard recipe={recipe}></RecipeCard>
{/each}
</RecipeGrid>
