describe("user visit article page", () => {
	let articleId = "";

	beforeEach(() => {
		cy.login();
		cy.createArticle().then(({ id }) => {
			articleId = id;
			cy.visit(`/articles/${id}`);
		});
	});

	afterEach(() => {
		cy.deleteArticle(articleId);
	});

	it("and article content loads", () => {
		cy.getByTestId("ArticleDetails.Info").should("exist");
	});

	it("and article recommendation list loads", () => {
		cy.getByTestId("ArticleRecommendations").should("exist");
	});

	it("and user send comment", () => {
		cy.getByTestId("CommentForm.Input").should("exist").scrollIntoView();
		cy.addComment("test comment");
		cy.getByTestId("CommentCard").should("have.length", 1);
	});

	it("and user rate the article", () => {
		cy.getByTestId("ArticleDetails.Info").should("exist");
		cy.getByTestId("RatingStar.list").scrollIntoView();
		cy.setRate(5, "feedback");
		cy.get("[data-selected=true]").should("have.length", 5);
	});
});
