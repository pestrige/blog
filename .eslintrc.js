module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"airbnb",
		"plugin:i18next/recommended",
		"prettier",
		"plugin:storybook/recommended",
	],
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint", "i18next"],
	rules: {
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [2, "tab"],
		indent: [2, "tab", { "SwitchCase": 1 }],
		"react/jsx-filename-extension": [
			2,
			{
				extensions: [".js", ".jsx", ".tsx"],
			},
		],
		"import/no-unresolved": "off",
		"import/prefer-default-export": "off",
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "warn",
		"react/require-default-props": "off",
		"react/react-in-jsx-scope": "off",
		"react/jsx-props-no-spreading": "off",
		"react/function-component-definition": "off",
		"no-shadow": "off",
		"import/extensions": "off",
		"import/no-extraneous-dependencies": "off",
		"no-underscore-dangle": "off",
		"no-tabs": "off",
		"arrow-body-style": "off",
		"no-param-reassign": "off",
		"no-undef": "off",
		"i18next/no-literal-string": [
			"error",
			{
				markupOnly: true,
			},
		],
		"max-len": [
			"error",
			{
				ignoreComments: true,
				code: 110,
			},
		],
	},
	globals: {
		__IS_DEV__: true,
		__API__: true,
		JSX: true,
	},
};
