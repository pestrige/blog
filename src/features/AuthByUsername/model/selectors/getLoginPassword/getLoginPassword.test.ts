import { StoreSchema } from "@/shared/config";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginPassword", () => {
	test("should return password", () => {
		const state: DeepPartial<StoreSchema> = {
			login: { password: "123" },
		};

		expect(getLoginPassword(state as StoreSchema)).toBe("123");
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StoreSchema> = {};

		expect(getLoginPassword(state as StoreSchema)).toBe("");
	});
});
