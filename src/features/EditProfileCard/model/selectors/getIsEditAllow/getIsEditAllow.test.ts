import { StoreSchema } from "shared/config";
import { getIsEditAllow } from "./getIsEditAllow";

describe("getIsEditAllow", () => {
	test("should return true", () => {
		const store: Partial<StoreSchema> = {
			profile: { data: { id: "1" }, isLoading: false, validateErrors: {}, readonly: true },
			user: { authData: { id: "1", username: "123213" } },
		};
		expect(getIsEditAllow(store as StoreSchema)).toBe(true);
	});

	test("should return false", () => {
		const store: Partial<StoreSchema> = {
			profile: { data: { id: "1" }, isLoading: false, validateErrors: {}, readonly: true },
			user: { authData: { id: "2", username: "123213" } },
		};

		expect(getIsEditAllow(store as StoreSchema)).toBe(false);
	});

	test("should return false with empty store", () => {
		const store: Partial<StoreSchema> = {};

		expect(getIsEditAllow(store as StoreSchema)).toBe(false);
	});
});
