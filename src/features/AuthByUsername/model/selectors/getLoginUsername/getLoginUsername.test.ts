import { DeepPartial } from "@reduxjs/toolkit";
import { StoreSchema } from "shared/config";
import { getLoginUsername } from "./getLoginUsername";

describe("getLoginPassword", () => {
	test("should return username", () => {
		const state: DeepPartial<StoreSchema> = {
			login: { username: "admin" },
		};

		expect(getLoginUsername(state as StoreSchema)).toBe("admin");
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StoreSchema> = {};

		expect(getLoginUsername(state as StoreSchema)).toBe("");
	});
});
