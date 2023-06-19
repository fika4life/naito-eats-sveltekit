<script>
  import "../app.postcss";
  import Navbar from '$lib/components/Navbar.svelte'
  import Footer from '$lib/components/Footer.svelte'
</script>

<Navbar></Navbar>
<main class="container mx-auto px-8">
  <slot />
</main>

<Footer></Footer>
