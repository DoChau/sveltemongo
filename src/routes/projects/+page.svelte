<script lang="ts">
	import type { PageData } from './$types'
	import { goto } from "$app/navigation";
  
  export let data: PageData;
  $: ({projects} = data);


 </script>

<div>
  <h1>Hello</h1>
  
  <p><a href="/profile">See your profile</a></p>
  <hr />
  {#if projects != null}
    {#each projects as project}
      <h2>Titre du projet : {project.title}</h2>
    {/each}
  {/if}
</div>

