import babelRemovePropsPlugin from "../../babel/babelRemovePropsPlugin";

interface BuildBabelLoaderProps {
	isDev: boolean;
	isTsx?: boolean;
}

export function buildBabelLoader({ isDev, isTsx }: BuildBabelLoaderProps) {
	return {
		test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				cacheDirectory: true,
				plugins: [
					[
						"@babel/plugin-transform-typescript",
						{
							isTSX: isTsx,
						},
					],
					isDev && require.resolve("react-refresh/babel"),
					!isDev && isTsx && [babelRemovePropsPlugin, { props: ["data-testid"] }],
				].filter(Boolean),
			},
		},
	};
}
