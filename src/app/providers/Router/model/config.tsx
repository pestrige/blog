import { RouteProps } from "react-router-dom";
import { ReactElement } from "react";
import {
	AboutPage,
	ArticlesPage,
	DetailArticlePage,
	MainPage,
	NotFound,
	ProfilePage,
	SettingsPage,
} from "@/pages";
import { ArticleEditPage } from "@/pages/ArticleEditPage";
import { AdminPanelPage } from "@/pages/AdminPanelPage";
import { ForbiddenPage } from "@/pages/ForbiddenPage";
import { UserRole } from "@/entities/User";
import { AppRoutes, getRoute } from "@/shared/constants";

type AppRouteProps = RouteProps & {
	authOnly?: boolean;
	roles?: UserRole[];
	element: ReactElement;
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
	[AppRoutes.MAIN]: { element: <MainPage />, path: getRoute.main() },
	[AppRoutes.ABOUT]: { element: <AboutPage />, path: getRoute.about() },
	[AppRoutes.PROFILE]: {
		element: <ProfilePage />,
		path: `${getRoute.profile(":id")}`,
		authOnly: true,
	},
	[AppRoutes.ARTICLES]: { element: <ArticlesPage />, path: getRoute.articles(), authOnly: true },
	[AppRoutes.ARTICLE]: {
		element: <DetailArticlePage />,
		path: `${getRoute.article(":id")}`,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_EDIT]: {
		element: <ArticleEditPage />,
		path: getRoute.articleEdit(":id"),
		authOnly: true,
	},
	[AppRoutes.ARTICLE_CREATE]: {
		element: <ArticleEditPage />,
		path: getRoute.articleCreate(),
		authOnly: true,
	},
	[AppRoutes.ADMIN_PANEL]: {
		element: <AdminPanelPage />,
		path: getRoute.adminPanel(),
		authOnly: true,
		roles: [UserRole.ADMIN, UserRole.MANAGER],
	},
	[AppRoutes.FORBIDDEN]: {
		element: <ForbiddenPage />,
		path: getRoute.forbidden(),
		authOnly: true,
	},
	[AppRoutes.SETTINGS]: {
		element: <SettingsPage />,
		path: getRoute.settings(),
		authOnly: true,
	},

	// last
	[AppRoutes.NOT_FOUND]: { element: <NotFound />, path: "*" },
};

export const appRoutes: AppRouteProps[] = Object.values(routeConfig);
