export const buildSvgLoader = () => ({
	test: /\.svg$/i,
	issuer: /\.[jt]sx?$/,
	use: ["@svgr/webpack"],
});
