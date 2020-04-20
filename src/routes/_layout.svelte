<!-- DEV ONLY -->
<!-- {#if Refresh}<svelte:component this={Refresh}/>{/if} -->

<slot></slot>

<script>
	// // DEV ONLY:
	// import { onMount } from 'svelte'
	// let Refresh = false
	// onMount(async () => Refresh = (await import('./_refresh.svelte')).default)
</script>

<!-- <style type="text/scss"></style> -->
