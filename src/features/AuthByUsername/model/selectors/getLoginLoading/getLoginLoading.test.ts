import { StoreSchema } from "@/shared/config";
import { getLoginLoading } from "./getLoginLoading";

describe("getLoginLoading", () => {
	test("should return true loading status", () => {
		const state: DeepPartial<StoreSchema> = { login: { isLoading: true } };

		expect(getLoginLoading(state as StoreSchema)).toBe(true);
	});

	test("should return false loading status", () => {
		const state: DeepPartial<StoreSchema> = { login: { isLoading: false } };

		expect(getLoginLoading(state as StoreSchema)).toBe(false);
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StoreSchema> = {};

		expect(getLoginLoading(state as StoreSchema)).toBe(false);
	});
});
