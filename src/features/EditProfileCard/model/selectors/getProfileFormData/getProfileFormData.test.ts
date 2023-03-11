import { StoreSchema } from "shared/config";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { getProfileFormData } from "./getProfileFormData";

const profile = {
	first: "Ivan",
	lastname: "Ivanov",
	age: 36,
	currency: Currency.RUB,
	country: Country.Russia,
	city: "Moscow",
	username: "admin",
	avatar: "avatar-url.webp",
};

describe("getProfileFormData", () => {
	test("should return profile form data", () => {
		const state: DeepPartial<StoreSchema> = {
			profile: { form: profile },
		};

		expect(getProfileFormData(state as StoreSchema)).toEqual(profile);
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StoreSchema> = {};

		expect(getProfileFormData(state as StoreSchema)).toBe(undefined);
	});
});
