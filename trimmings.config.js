export default {
	postcss: {
		input: 'src/node_modules/@society/postcss',
		outputStatic: 'static/css',
	},
	svgo: {
		input: 'src/node_modules/@society/svgo',
		outputSvelte: 'src/node_modules/@society/svelte/svg',
		outputStatic: false,
	},
}
