import { StoreSchema } from "@/shared/config";
import { getProfileLoading } from "./getProfileLoading";

describe("getProfileLoading", () => {
	test("should return profile loading status", () => {
		const state: DeepPartial<StoreSchema> = {
			profile: { isLoading: true },
		};

		expect(getProfileLoading(state as StoreSchema)).toBe(true);
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StoreSchema> = {};

		expect(getProfileLoading(state as StoreSchema)).toBe(false);
	});
});
