import { StoreSchema } from "@/shared/config";
import { getProfileReadonly } from "./getProfileReadonly";

describe("getProfileReadonly", () => {
	test("should return profile readonly status", () => {
		const state: DeepPartial<StoreSchema> = {
			profile: { readonly: true },
		};

		expect(getProfileReadonly(state as StoreSchema)).toBe(true);
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StoreSchema> = {};

		expect(getProfileReadonly(state as StoreSchema)).toBe(false);
	});
});
