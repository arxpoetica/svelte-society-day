<!-- <svelte:component this={Refresh}/> -->
<!-- Get rid of those annoying warning signals -->
<div class="ghost">{segment}</div>

<slot></slot>

<script>
	export let segment = ''

	import { onMount } from 'svelte'

	let html
	// let Refresh = false
	onMount(async () => {
		// Refresh = (await import('./_refresh.svelte')).default

		// this delay removes the `preload` class from the `html` element
		setTimeout(() => html = document.querySelector('html').classList.remove('preloaded'), 150)
	})
</script>

<!-- <style type="text/scss"></style> -->
