import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildCssLoader = (isDev: boolean) => ({
	test: /\.s[ac]ss$/i,
	exclude: /node_modules/,
	use: [
		isDev ? "style-loader" : MiniCssExtractPlugin.loader,
		{
			loader: "css-loader",
			options: {
				modules: {
					auto: (path: string) => !!path.includes(".module.scss"),
					localIdentName: isDev ? "[name]__[local]--[hash:base64:4]" : "[hash:base64:8]",
				},
			},
		},
		"sass-loader",
	],
});
