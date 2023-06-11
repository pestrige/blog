export const buildSvgLoader = () => ({
	test: /\.svg$/i,
	issuer: /\.[jt]sx?$/,
	use: [{ loader: "@svgr/webpack",
		options: {
			svgoConfig: { plugins: [{ name: "convertColors", params: { currentColor: true } }] }
		}
	}]
});
