const IS_PROD = process.env.NODE_ENV === "production";

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
	plugins: [
		"react",
		"@typescript-eslint",
		"i18next",
		"unused-imports",
		!IS_PROD && "fsd-path-checker",
	].filter(Boolean),
	rules: {
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [2, "tab"],
		indent: [2, "tab", { SwitchCase: 1 }],
		"react/jsx-filename-extension": [
			2,
			{
				extensions: [".js", ".jsx", ".tsx"],
			},
		],
		"import/no-unresolved": "off",
		"unused-imports/no-unused-imports": "error",
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
		"prefer-arrow-callback": "off",
		"jsx-a11y/click-events-have-key-events": "off",
		"jsx-a11y/no-noninteractive-element-interactions": "off",
		"react/no-array-index-key": "off",
		[IS_PROD ? undefined : "fsd-path-checker/path-checker"]: IS_PROD ? "off" : ["error", { alias: "@" }],
		[IS_PROD ? undefined : "fsd-path-checker/public-api-imports"]: IS_PROD
			? "off"
			: [
					"error",
					{
						alias: "@",
						testFilesPatterns: ["**/*.test.*", "**/*.stories.*", "**/StoreDecorator.tsx"],
					},
			  ],
		[IS_PROD ? undefined : "fsd-path-checker/layer-imports"]: IS_PROD
			? "off"
			: [
					"error",
					{
						alias: "@",
						ignoreImportPatterns: ["**/StoreSchema", "**/testing"],
						ignoreFiles: [
							"**/StoreSchema.ts",
							"**/lib/tests/**",
							"**/shared/config/storybook/**",
							"**/shared/config/store/**",
						],
					},
			  ],
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
				ignorePattern: "^export|import .*",
				code: 110,
			},
		],
	},
	globals: {
		__IS_DEV__: true,
		__API__: true,
		__PROJECT__: true,
		JSX: true,
	},
};
