<svelte:window bind:scrollY={scroll_y} bind:innerHeight={$view_height}/>
<svelte:head><title>Svelte Society Day - Home</title></svelte:head>

<Panel/>

<div class="chapters">
	<Chapter1/>

	<IntersectionObserver let:elem let:intersecting>
		<div class="chapter chapter-2">
			<h2>Content</h2>
		</div>
	</IntersectionObserver>

	<IntersectionObserver let:elem let:intersecting>
		<div class="chapter chapter-3">
			<h2>Content</h2>
		</div>
	</IntersectionObserver>

	<IntersectionObserver let:elem let:intersecting>
		<div class="chapter chapter-4">
			<h2>Content</h2>
		</div>
	</IntersectionObserver>

	<IntersectionObserver let:elem let:intersecting>
		<div class="chapter chapter-5">
			<h2>Content</h2>
		</div>
	</IntersectionObserver>

	<IntersectionObserver let:elem let:intersecting>
		<div class="chapter chapter-6">
			<h2>Content</h2>
		</div>
	</IntersectionObserver>

	<IntersectionObserver let:elem let:intersecting>
		<div class="chapter chapter-7">
			<h2>Content</h2>
		</div>
	</IntersectionObserver>

	<IntersectionObserver let:elem let:intersecting>
		<div class="chapter chapter-8">
			<h2>Content</h2>
		</div>
	</IntersectionObserver>
</div>

<script>
	import { story_scroll, view_height } from '@society/js/stores.js'

	import Panel from '@society/svelte/layout/Panel.svelte'
	import IntersectionObserver from '@society/svelte/IntersectionObserver.svelte'
	import Chapter1 from '@society/svelte/Chapter1.svelte'

	let scroll_y = 0
	$: story_scroll.set(scroll_y)
</script>

<style type="text/scss">
	.chapters {
		padding-top: 100rem;
		width: 100%;
	}
	.chapter {
		width: 100%;
		padding: 50rem;
		color: white;
	}
</style>
