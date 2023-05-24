describe("user visit articles list", () => {
	beforeEach(() => {
		cy.login().then(() => {
			cy.visit(`/articles`);
		});
	});

	it("and articles list loads", () => {
		cy.getByTestId("ArticleList").should("exist");
		cy.getByTestId("ArticleListItem").should("have.lengthOf.greaterThan", 3);
	});
});
