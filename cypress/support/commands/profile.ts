export const updateProfile = (firstname: string, lastname: string) => {
	cy.getByTestId("ProfileCard.EditBtn").click();
	cy.getByTestId("ProfileCard.Input.first").clear().type(firstname);
	cy.getByTestId("ProfileCard.Input.lastname").clear().type(lastname);
	cy.getByTestId("ProfileCard.SaveBtn").click();
};

export const resetProfile = (profileId: string) => {
	cy.request({
		method: "PUT",
		url: `http://localhost:8000/profile/${profileId}`,
		headers: { authorization: "token" },
		body: {
			id: "4",
			first: "Peter",
			lastname: "Petrov",
			age: 25,
			currency: "EUR",
			country: "Russia",
			city: "Moscow",
			username: "test",
			avatar: "https://i.pravatar.cc/150?img=3",
		},
	});
};

declare global {
	namespace Cypress {
		interface Chainable {
			updateProfile(firstname: string, lastname: string): Chainable<void>;
			resetProfile(profileId: string): Chainable<void>;
		}
	}
}
