import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
	const babelLoader = {
		test: /\.[j|t]sx?$/,
		exclude: /node-modules/,
		use: {
			loader: "babel-loader",
			options: {
				// preset: ['@babel/preset-env'],
				plugins: [isDev && 'react-refresh/babel'].filter(Boolean)
			},
		},
	};

	const svgLoader = {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: ['@svgr/webpack'],
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (path: string) => !!path.includes(".module.scss"),
						localIdentName: isDev ? "[name]__[local]--[hash:base64:4]" : "[hash:base64:8]"
					}
				}
			},
			"sass-loader",
		],
	};

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	return [
		svgLoader,
		fileLoader,
		babelLoader,
		typescriptLoader,
		cssLoader,
	]
}
