<script>
    export let recipe;
  
  </script>
  
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure><img src="https://source.unsplash.com/random/300x200?food" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">{recipe.title}</h2>
      <p>{recipe.description}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary"><a href="/recipes/{recipe.id}">Get the recipe</a></button>
      </div>
    </div>
  </div>