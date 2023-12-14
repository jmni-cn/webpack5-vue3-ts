module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	parser: "vue-eslint-parser",
	parserOptions: {
		ecmaVersion: 12,
		parser: "@typescript-eslint/parser",
		sourceType: "module",
	},
	plugins: ["vue", "@typescript-eslint", 'prettier'],
	// extends的优先级也是从后往前的
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:vue/vue3-recommended",
		"eslint:recommended",
	],
	rules: {
		'semi': [2, 'never'],
		"quotes": ["error", "single"],
		"indent": ["error", "tab"],
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/ban-types": "off",
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
	},
};
