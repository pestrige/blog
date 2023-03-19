import { StoreSchema } from "shared/config";
import { LoginSchema } from "features/AuthByUsername";
import { getLoginState } from "./getLoginState";

describe("getLoginState", () => {
	test("should return login state", () => {
		const loginState: LoginSchema = {
			password: "123",
			username: "username",
			error: "",
			isLoading: false,
		};
		const state: DeepPartial<StoreSchema> = { login: loginState };

		expect(getLoginState(state as StoreSchema)).toEqual(loginState);
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StoreSchema> = {};

		expect(getLoginState(state as StoreSchema)).toEqual(undefined);
	});
});
