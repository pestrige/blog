import { StoreSchema } from "shared/config";
import { getLoginError } from "./getLoginError";

describe("getLoginError", () => {
	test("should return login error", () => {
		const state: DeepPartial<StoreSchema> = {
			login: { error: "error message" },
		};

		expect(getLoginError(state as StoreSchema)).toBe("error message");
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StoreSchema> = {};

		expect(getLoginError(state as StoreSchema)).toBe("");
	});
});
