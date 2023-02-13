import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BuildOptions } from "./types/config";

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
	const plugins = [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({ template: paths.html }),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "css/[name].[contenthash:8].css",
		}),
		new webpack.DefinePlugin({ __IS_DEV__: isDev }),
	];

	if (isDev) {
		plugins.push(new ReactRefreshWebpackPlugin());
	}

	return plugins;
}
