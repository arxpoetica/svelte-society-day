<svelte:window bind:scrollY={scroll_y} bind:innerHeight={$view_height}/>
<svelte:head><title>Svelte Society Day - Home</title></svelte:head>

<Panel/>

<div class="chapters">
	<div class="chapter chapter-1">
	</div>

	<div class="chapter chapter-2">
	</div>

	<div class="chapter chapter-3">
	</div>

	<div class="chapter chapter-4">
	</div>

	<div class="chapter chapter-5">
	</div>

	<div class="chapter chapter-6">
	</div>

	<div class="chapter chapter-7">
	</div>

	<div class="chapter chapter-8">
	</div>
</div>

<script>
	import Panel from '@society/svelte/layout/Panel.svelte'
	import { story_scroll, view_height } from '@society/js/stores.js'

	let scroll_y = 0
	$: story_scroll.set(scroll_y)
</script>

<style type="text/scss">
	.chapters {
		width: 100%;
	}
	.chapter {
		position: relative;
		padding: 50rem;
		width: 100%;
		height: 100vh;
		z-index: 1;
	}
	// .chapter-content {
	// 	position: relative;
	// 	margin: 0 auto;
	// 	// padding: 0 40rem;
	// 	width: 100%;
	// 	max-width: $layout-width;
	// 	z-index: 2;
	// 	// @media (--small-down) { padding: 0 20rem; }
	// }
	// https://css-tricks.com/full-width-containers-limited-width-parents/
	// https://codepen.io/tigt/post/bust-elements-out-of-containers-with-one-line-of-css
	// .full-width {
	// 	margin: 0 calc(50% - 50vw);
	// }
</style>
