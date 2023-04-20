import { ReactElement } from "react";
import { RouteProps } from "react-router-dom";
import { AboutPage, ArticlesPage, DetailArticlePage, MainPage, NotFound, ProfilePage } from "pages";
import { ArticleEditPage } from "pages/ArticleEditPage";
import { AdminPanelPage } from "pages/AdminPanelPage";
import { UserRole } from "entities/User";
import { ForbiddenPage } from "pages/ForbiddenPage";

type AppRouteProps = RouteProps & {
	authOnly?: boolean;
	roles?: UserRole[];
	element: ReactElement;
};

export enum AppRoutes {
	MAIN = "main",
	ABOUT = "about",
	PROFILE = "profile",
	ARTICLES = "articles",
	ARTICLE = "article",
	ARTICLE_CREATE = "article_create",
	ARTICLE_EDIT = "article_edit",
	ADMIN_PANEL = "admin_panel",
	FORBIDDEN = "forbidden",

	// last
	NOT_FOUND = "notFound",
}

export const RoutePaths: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about",
	[AppRoutes.PROFILE]: "/profile", // + /:id
	[AppRoutes.ARTICLES]: "/articles",
	[AppRoutes.ARTICLE]: "/article", // /articles + /:id
	[AppRoutes.ARTICLE_CREATE]: "/article/new",
	[AppRoutes.ARTICLE_EDIT]: "/article/:id/edit",
	[AppRoutes.ADMIN_PANEL]: "/admin",
	[AppRoutes.FORBIDDEN]: "/forbidden",

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
		path: `${RoutePaths.article}/:id`,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_EDIT]: {
		element: <ArticleEditPage />,
		path: RoutePaths.article_edit,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_CREATE]: {
		element: <ArticleEditPage />,
		path: RoutePaths.article_create,
		authOnly: true,
	},
	[AppRoutes.ADMIN_PANEL]: {
		element: <AdminPanelPage />,
		path: RoutePaths.admin_panel,
		authOnly: true,
		roles: [UserRole.ADMIN, UserRole.MANAGER],
	},
	[AppRoutes.FORBIDDEN]: {
		element: <ForbiddenPage />,
		path: RoutePaths.forbidden,
		authOnly: true,
	},
	[AppRoutes.NOT_FOUND]: { element: <NotFound />, path: RoutePaths.notFound },
};

export const appRoutes: AppRouteProps[] = Object.values(routeConfig);
