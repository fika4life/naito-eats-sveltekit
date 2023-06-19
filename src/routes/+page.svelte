<script>
    import RecipeCard from "../lib/components/RecipeCard.svelte";
    import RecipeGrid from "../lib/components/RecipeGrid.svelte";
    let recipe = {title:'test recipe'}
</script>

<h1 class="text-xl">Most recent recipes</h1>
<RecipeGrid>
    <RecipeCard recipe={recipe}></RecipeCard>
    <RecipeCard recipe={recipe}></RecipeCard>
    <RecipeCard recipe={recipe}></RecipeCard>
    <RecipeCard recipe={recipe}></RecipeCard>
</RecipeGrid>