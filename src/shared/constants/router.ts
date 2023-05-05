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
