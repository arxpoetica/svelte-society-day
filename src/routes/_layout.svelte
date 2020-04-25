<!-- <svelte:component this={Refresh}/> -->
<!-- Get rid of those annoying warning signals -->
<div class="ghost">{segment}</div>

<slot></slot>

<script>
	export let segment = ''

	import { onMount } from 'svelte'
	import { youtube_ready } from '@society/js/stores.js'

	let html
	// let Refresh = false
	onMount(async () => {
		// Refresh = (await import('./_refresh.svelte')).default
		window.youtube_ready = youtube_ready

		// this delay removes the `preload` class from the `html` element
		setTimeout(() => html = document.querySelector('html').classList.remove('preloaded'), 150)
	})
</script>

<!-- <style type="text/scss"></style> -->
