import { ReactElement } from "react";
import { RouteProps } from "react-router-dom";
import { AboutPage, ArticlesPage, DetailArticlePage, MainPage, NotFound, ProfilePage } from "pages";

type AppRouteProps = RouteProps & {
	authOnly?: boolean;
	element: ReactElement;
};

export enum AppRoutes {
	MAIN = "main",
	ABOUT = "about",
	PROFILE = "profile",
	ARTICLES = "articles",
	ARTICLE = "article",

	// last
	NOT_FOUND = "notFound",
}

export const RoutePaths: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about",
	[AppRoutes.PROFILE]: "/profile", // + /:id
	[AppRoutes.ARTICLES]: "/articles",
	[AppRoutes.ARTICLE]: "/article", // /articles + /:id

	// last
	[AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
	[AppRoutes.MAIN]: { element: <MainPage />, path: RoutePaths.main },
	[AppRoutes.ABOUT]: { element: <AboutPage />, path: RoutePaths.about },
	[AppRoutes.PROFILE]: {
		element: <ProfilePage />,
		path: `${RoutePaths.profile}/:id`,
		authOnly: true,
	},
	[AppRoutes.ARTICLES]: { element: <ArticlesPage />, path: RoutePaths.articles, authOnly: true },
	[AppRoutes.ARTICLE]: {
		element: <DetailArticlePage />,
		path: `${RoutePaths.articles}/:id`,
		authOnly: true,
	},
	[AppRoutes.NOT_FOUND]: { element: <NotFound />, path: RoutePaths.notFound },
};

export const appRoutes: AppRouteProps[] = Object.values(routeConfig);
