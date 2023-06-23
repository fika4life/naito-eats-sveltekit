<script>
  export let data;

  // let { countries } = data;
  //   $: ({ countries } = data);
  const {products} = data.data


 
  import RecipeCard from "$lib/components/RecipeCard.svelte";
</script>


{#each products as product}
  <RecipeCard recipe={product}></RecipeCard>
{/each}
