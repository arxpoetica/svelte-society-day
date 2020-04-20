module.exports = {
	extends: '../../.eslintrc.js',
	env: {
		browser: true,
		node: false,
	},
	rules: {
		'no-console': 'error',
	},
	globals: {
		process: true,
	},
}
