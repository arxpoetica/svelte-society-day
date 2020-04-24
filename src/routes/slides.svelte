<svelte:window bind:scrollY bind:innerHeight/>
<svelte:head><title>Svelte Society Day - Slides</title></svelte:head>

<Panel info={false}/>

<div class="modals">

	<Slide1/>
	<Slide2/>
	<Slide3Title/>
	<Slide3/>
	<!-- history-cave-paintings.jps -->

	<Slide2/>
</div>

<script>
	import { story_scroll, view_height } from '@society/js/stores.js'

	import Panel from '@society/svelte/layout/Panel.svelte'
	import Slide1 from '@society/svelte/slides/Slide1.svelte'
	import Slide2 from '@society/svelte/slides/Slide2.svelte'
	import Slide3Title from '@society/svelte/slides/Slide3-title.svelte'
	import Slide3 from '@society/svelte/slides/Slide3.svelte'

	let scrollY = 0
	$: story_scroll.set(scrollY)

	let innerHeight = 0
	$: view_height.set(innerHeight - 100)
</script>

<style type="text/scss">
	.modals {
		padding-bottom: 100rem;
		width: 100%;
		background-color: black;
		color: white;
	}
	:global {
		.modal {
			position: relative;
			overflow: hidden;
			display: flex;
			width: 100%;
		}
	}
</style>
