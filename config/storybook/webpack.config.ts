import webpack, { DefinePlugin, RuleSetRule } from "webpack";
import path from "path";
import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPaths = {
		build: "",
		html: "",
		entry: "",
		src: path.resolve(__dirname, "..", "..", "src"),
		locales: path.resolve(__dirname, "..", "..", "public", "locales"),
		buildLocales: "",
	};

	config!.resolve!.modules!.push(paths.src);
	config!.resolve!.extensions!.push(".ts", ".tsx");

	// eslint-disable-next-line no-param-reassign
	// @ts-ignore
	config!.module!.rules = config!.module!.rules.map((rule: RuleSetRule) => {
		return /svg/.test(rule.test as string) ? { ...rule, exclude: /\.svg$/i } : rule;
	});

	config!.module!.rules.push(buildSvgLoader());
	config!.module!.rules.push(buildCssLoader(true));

	config!.plugins!.push(
		new DefinePlugin({
			__IS_DEV__: true,
			__API__: JSON.stringify("https://testapi.ru"),
			__PROJECT__: JSON.stringify("storybook"),
		})
	);

	return config;
};
