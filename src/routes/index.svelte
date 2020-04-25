<svelte:window bind:scrollY bind:innerHeight/>
<svelte:head><title>Svelte Society Day - Home</title></svelte:head>

<Panel/>

<div class="modals">
	<ModalBlank/>
	<ModalSprite/>
	<ModalBlank/>
</div>

<script>
	import { story_scroll, view_height } from '@society/js/stores.js'

	import Panel from '@society/svelte/layout/Panel.svelte'

	import ModalSprite from '@society/svelte/ModalSprite.svelte'
	import ModalBlank from '@society/svelte/ModalBlank.svelte'

	let scrollY = 0
	$: story_scroll.set(scrollY)

	let innerHeight = 0
	$: view_height.set(innerHeight - 100)
</script>

<style type="text/scss">
	.modals {
		padding-bottom: 100rem;
		width: 100%;
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
