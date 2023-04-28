import { StoreSchema } from "@/shared/config";
import { ValidateErrorsEnum } from "@/entities/ProfileCard";
import { getProfileValidateErrors } from "./getProfileValidateErrors";

const validateErrors = {
	first: ValidateErrorsEnum.REQUIRED_FIELD,
	age: ValidateErrorsEnum.INCORRECT_AGE,
};

describe("getProfileValidateErrors", () => {
	test("should return profile validation errors", () => {
		const state: DeepPartial<StoreSchema> = {
			profile: { validateErrors },
		};

		expect(getProfileValidateErrors(state as StoreSchema)).toEqual(validateErrors);
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StoreSchema> = {};

		expect(getProfileValidateErrors(state as StoreSchema)).toEqual({});
	});
});
