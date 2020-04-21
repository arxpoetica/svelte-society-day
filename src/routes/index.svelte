<svelte:window bind:scrollY bind:innerHeight/>
<svelte:head><title>Svelte Society Day - Home</title></svelte:head>

<Panel/>

<div class="chapters">

	<Chapter1/>
	<Chapter1/>
	<Chapter1/>
	<Chapter1/>
	<Chapter1/>
	<Chapter1/>
	<Chapter1/>
	<Chapter1/>
	<Chapter1/>
	<!-- <Chapter2/> -->
	<!-- <Chapter3/> -->

</div>

<script>
	import { story_scroll, view_height } from '@society/js/stores.js'

	import Panel from '@society/svelte/layout/Panel.svelte'

	import IntersectionObserver from '@society/svelte/IntersectionObserver.svelte'

	import Chapter1 from '@society/svelte/Chapter1.svelte'
	// import Chapter2 from '@society/svelte/Chapter2.svelte'
	// import Chapter3 from '@society/svelte/Chapter3.svelte'

	let scrollY = 0
	$: story_scroll.set(scrollY)

	let innerHeight = 0
	$: view_height.set(innerHeight - 100)
</script>

<style type="text/scss">
	.chapters {
		padding-bottom: 100rem;
		width: 100%;
	}
	:global {
		.chapter {
			position: relative;
			overflow: hidden;
			display: flex;
			width: 100%;
		}
	}
</style>
