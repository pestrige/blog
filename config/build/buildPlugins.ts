import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import CopyPlugin from "copy-webpack-plugin";
import CircularDependencyPlugin from "circular-dependency-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { BuildOptions } from "./types/config";

export function buildPlugins({
	paths,
	isDev,
	apiUrl,
	project,
}: BuildOptions): webpack.WebpackPluginInstance[] {
	const isProd = !isDev;

	const plugins = [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({ template: paths.html }),
		new webpack.DefinePlugin({
			__IS_DEV__: isDev,
			__API__: JSON.stringify(apiUrl),
			__PROJECT__: JSON.stringify(project),
		}),
	];

	if (isDev) {
		plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
		plugins.push(new webpack.HotModuleReplacementPlugin());
		plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }));
		plugins.push(new CircularDependencyPlugin({ exclude: /node_modules/, failOnError: true }));
		plugins.push(
			new ForkTsCheckerWebpackPlugin({
				typescript: {
					diagnosticOptions: {
						semantic: true,
						syntactic: true,
					},
					mode: "write-references",
				},
			})
		);
	}

	if (isProd) {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: "css/[name].[contenthash:8].css",
				chunkFilename: "css/[name].[contenthash:8].css",
			})
		);
		plugins.push(
			new CopyPlugin({
				patterns: [{ from: paths.locales, to: paths.buildLocales }],
			})
		);
	}

	return plugins;
}
