import { RouteProps } from "react-router-dom";
import { AboutPage, MainPage, NotFound } from "pages";

export enum AppRoutes {
	MAIN = "main",
	ABOUT = "about",
	NOT_FOUND = "notFound",
}

export const RoutePaths: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about",

	[AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: { element: <MainPage />, path: RoutePaths.main },
	[AppRoutes.ABOUT]: { element: <AboutPage />, path: RoutePaths.about },
	[AppRoutes.NOT_FOUND]: { element: <NotFound />, path: RoutePaths.notFound },
};

export const appRoutes: RouteProps[] = Object.values(routeConfig);
