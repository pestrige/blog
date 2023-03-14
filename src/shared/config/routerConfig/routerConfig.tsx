import { RouteProps } from "react-router-dom";
import { AboutPage, MainPage, NotFound, ProfilePage } from "pages";
import { ReactElement } from "react";

type AppRouteProps = RouteProps & {
	authOnly?: boolean;
	element: ReactElement;
};

export enum AppRoutes {
	MAIN = "main",
	ABOUT = "about",
	PROFILE = "profile",

	// last
	NOT_FOUND = "notFound",
}

export const RoutePaths: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about",
	[AppRoutes.PROFILE]: "/profile",

	// last
	[AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
	[AppRoutes.MAIN]: { element: <MainPage />, path: RoutePaths.main },
	[AppRoutes.ABOUT]: { element: <AboutPage />, path: RoutePaths.about },
	[AppRoutes.PROFILE]: { element: <ProfilePage />, path: RoutePaths.profile, authOnly: true },
	[AppRoutes.NOT_FOUND]: { element: <NotFound />, path: RoutePaths.notFound },
};

export const appRoutes: AppRouteProps[] = Object.values(routeConfig);
