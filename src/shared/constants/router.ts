export enum AppRoutes {
	MAIN = "main",
	ABOUT = "about",
	PROFILE = "profile",
	ARTICLES = "articles",
	ARTICLE = "article",
	ARTICLE_CREATE = "articleCreate",
	ARTICLE_EDIT = "articleEdit",
	ADMIN_PANEL = "adminPanel",
	FORBIDDEN = "forbidden",
	NOT_FOUND = "notFound",
}

export const getRoute = {
	main: () => "/",
	about: () => "/about",
	profile: (id: string) => `/profile/${id}`,
	articles: () => "/articles",
	article: (id: string) => `/articles/${id}`,
	articleCreate: () => "/article/new",
	articleEdit: (id: string) => `/article/${id}/edit`,
	adminPanel: () => "/admin",
	forbidden: () => "/forbidden",
};
