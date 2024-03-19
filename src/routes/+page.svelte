<script lang="ts">
	import type { ActionData, SubmitFunction } from './$types';
  import { enhance } from '$app/forms';
	import type { PageData } from './$types'

  export let projects: PageData;



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
