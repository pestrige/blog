import { selectByTestId } from "../../helpers/selectByTestId";

describe("Routing", () => {
	describe("user is not authorized", () => {
		it("visit main page", () => {
			cy.visit("/");
			cy.get(selectByTestId("MainPage")).should("exist");
		});
		it("visit profile page", () => {
			cy.visit("/profile/1");
			cy.get(selectByTestId("MainPage")).should("exist");
		});
		it("visit 404 page", () => {
			cy.visit("/unexpected-route");
			cy.get(selectByTestId("NotFoundPage")).should("exist");
		});
	});

	describe("user is authorized", () => {
		beforeEach(() => {
			cy.login();
		});
		it("visit profile page", () => {
			cy.visit("/profile/1");
			cy.get(selectByTestId("ProfilePage")).should("exist");
		});
		it("visit articles page", () => {
			cy.visit("articles");
			cy.get(selectByTestId("ArticlesPage")).should("exist");
		});
	});
});
