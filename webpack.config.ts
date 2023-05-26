import webpack from "webpack";
import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildMode, BuildPaths } from "./config/build/types/config";

function getApiUrl(mode: BuildMode, apiUrl?: string): string {
	if (apiUrl) {
		return apiUrl;
	}

	switch (mode) {
		case "production":
			return "/api";
		default:
			return "http://localhost:8000";
	}
}

export default (env: BuildEnv): webpack.Configuration => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, "src", "index.tsx"),
		build: path.resolve(__dirname, "build"),
		html: path.resolve(__dirname, "public", "index.html"),
		src: path.resolve(__dirname, "src"),
		locales: path.resolve(__dirname, "public", "locales"),
		buildLocales: path.resolve(__dirname, "build", "locales"),
	};
	const mode = env.mode || "development";
	const isDev = mode === "development";
	const port = env.port || 3000;
	const apiUrl = getApiUrl(env.mode, env.apiUrl);
	const project = "frontend";

	return buildWebpackConfig({
		mode,
		paths,
		isDev,
		port,
		apiUrl,
		project,
	});
};
