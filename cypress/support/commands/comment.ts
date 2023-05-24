export const addComment = (text: string) => {
	cy.getByTestId("CommentForm.Input").clear().type(text);
	cy.getByTestId("CommentForm.Submit").click();
};

export const setRate = (rate: number, feedback: string) => {
	cy.getByTestId(`RatingStar.${rate}`).click();
	cy.getByTestId("ArticleRating.Input").type(feedback);
	cy.getByTestId("ArticleRating.SendButton").click();
};

declare global {
	namespace Cypress {
		interface Chainable {
			addComment(test: string): Chainable<void>;
			setRate(rate: number, feedback: string): Chainable<void>;
		}
	}
}
