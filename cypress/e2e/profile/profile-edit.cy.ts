describe("user visit profile page", () => {
	let profileId = "";

	beforeEach(() => {
		cy.visit("");
		cy.login().then(({ id }) => {
			profileId = id;
			cy.visit(`/profile/${id}`);
		});
	});

	afterEach(() => {
		cy.resetProfile(profileId);
	});

	it("and profile page loads successfully", () => {
		cy.getByTestId("ProfileCard.Input.first").should("have.value", "Peter");
		cy.getByTestId("ProfileCard.Input.lastname").should("have.value", "Petrov");
	});

	it("and user edit profile", () => {
		const newFirstname = "Ivan";
		const newLastname = "Ivanov";
		cy.updateProfile(newFirstname, newLastname);
		cy.getByTestId("ProfileCard.Input.first").should("have.value", newFirstname);
		cy.getByTestId("ProfileCard.Input.lastname").should("have.value", newLastname);
	});
});
