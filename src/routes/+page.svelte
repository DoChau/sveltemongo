<script lang="ts">


  import type { PageData } from "./$types";
	import { goto } from "$app/navigation";

  let projects
  export let data: PageData;
  $: (projects = data);

</script>

<main>
  {#if projects != null}
    {#each projects as project}
      <h2>Titre du projet : {project.title}</h2>
    {/each}
  {/if}
  <h1>My Svelte App</h1>
  <p>This app has custom authentication built on top of MongoDB</p>
  <hr />
</main>
