import { StorageKeys } from "../../../src/shared/constants";
import { User } from "../../../src/entities/User";
import { selectByTestId } from "../../helpers/selectByTestId";

export const login = (username = "test", password = "123") => {
	return cy
		.request({
			method: "POST",
			url: "http://localhost:8000/login",
			body: { username, password },
		})
		.then(({ body }) => {
			window.localStorage.setItem(StorageKeys.USER_LOCALSTORAGE_KEY, JSON.stringify(body));
			return body;
		});
};

export const getByTestId = (id: string) => {
	return cy.get(selectByTestId(id));
};

declare global {
	namespace Cypress {
		interface Chainable {
			login(username?: string, password?: string): Chainable<User>;
			getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
		}
	}
}
