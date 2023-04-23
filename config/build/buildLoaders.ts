import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildSvgLoader } from "./loaders/buildSvgLoader";
import { buildBabelLoader } from "./loaders/buildBabelLoader";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
	const svgLoader = buildSvgLoader();
	const babelLoader = buildBabelLoader({ isDev, isTsx: false });
	const tsxBabelLoader = buildBabelLoader({ isDev, isTsx: true });
	const cssLoader = buildCssLoader(isDev);

	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: "file-loader",
			},
		],
	};

	return [fileLoader, svgLoader, babelLoader, tsxBabelLoader, cssLoader];
}
