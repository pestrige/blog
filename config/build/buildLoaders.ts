import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildSvgLoader } from "./loaders/buildSvgLoader";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
	const babelLoader = {
		test: /\.[j|t]sx?$/,
		exclude: /node-modules/,
		use: {
			loader: "babel-loader",
			options: {
				plugins: [isDev && "react-refresh/babel"].filter(Boolean),
			},
		},
	};

	const svgLoader = buildSvgLoader();

	const cssLoader = buildCssLoader(isDev);

	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: "file-loader",
			},
		],
	};

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	};

	return [svgLoader, fileLoader, babelLoader, typescriptLoader, cssLoader];
}
