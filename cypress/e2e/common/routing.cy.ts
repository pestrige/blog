describe("Routing", () => {
	describe("user is not authorized", () => {
		it("visit main page", () => {
			cy.visit("/");
			cy.getByTestId("MainPage").should("exist");
		});
		it("visit profile page", () => {
			cy.visit("/profile/1");
			cy.getByTestId("MainPage").should("exist");
		});
		it("visit 404 page", () => {
			cy.visit("/unexpected-route");
			cy.getByTestId("NotFoundPage").should("exist");
		});
	});

	describe("user is authorized", () => {
		beforeEach(() => {
			cy.login();
		});
		it("visit profile page", () => {
			cy.visit("/profile/1");
			cy.getByTestId("ProfilePage").should("exist");
		});
		it("visit articles page", () => {
			cy.visit("articles");
			cy.getByTestId("ArticlesPage").should("exist");
		});
	});
});
