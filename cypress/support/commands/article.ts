import { Article } from "../../../src/entities/Article";

const testArticle = {
	title: "Kotlin news",
	subtitle: "Что нового в JS за 2022 год?",
	img: "https://miro.medium.com/max/1200/1*FNakkrty3kjOvNU8m5iQfw.png",
	views: 109,
	createdAt: "01.04.2023",
	userId: "1",
	type: ["IT"],
	blocks: [],
};

export const createArticle = (article?: Article) => {
	return cy
		.request({
			method: "POST",
			url: "http://localhost:8000/articles/",
			headers: { authorization: "token" },
			body: article ?? testArticle,
		})
		.then(({ body }) => body);
};

export const deleteArticle = (articleId: string) => {
	cy.request({
		method: "DELETE",
		url: `http://localhost:8000/articles/${articleId}`,
		headers: { authorization: "token" },
	});
};

declare global {
	namespace Cypress {
		interface Chainable {
			createArticle(article?: Article): Chainable<Article>;

			deleteArticle(articleId: string): Chainable<void>;
		}
	}
}
