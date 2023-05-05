import { RouteProps } from "react-router-dom";
import { ReactElement } from "react";
import { AboutPage, ArticlesPage, DetailArticlePage, MainPage, NotFound, ProfilePage } from "@/pages";
import { ArticleEditPage } from "@/pages/ArticleEditPage";
import { AdminPanelPage } from "@/pages/AdminPanelPage";
import { ForbiddenPage } from "@/pages/ForbiddenPage";
import { UserRole } from "@/entities/User";
import { AppRoutes, RoutePaths } from "@/shared/constants";

type AppRouteProps = RouteProps & {
	authOnly?: boolean;
	roles?: UserRole[];
	element: ReactElement;
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
