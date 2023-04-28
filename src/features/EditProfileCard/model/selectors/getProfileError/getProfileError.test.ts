import { StoreSchema } from "@/shared/config";
import { ValidateErrorsEnum } from "@/entities/ProfileCard";
import { getProfileError } from "./getProfileError";

describe("getProfileError", () => {
	test("should return profile error", () => {
		const state: DeepPartial<StoreSchema> = {
			profile: { error: ValidateErrorsEnum.SERVER_ERROR },
		};

		expect(getProfileError(state as StoreSchema)).toEqual(ValidateErrorsEnum.SERVER_ERROR);
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StoreSchema> = {};

		expect(getProfileError(state as StoreSchema)).toBe(undefined);
	});
});
