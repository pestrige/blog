import { StoreSchema } from "shared/config";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { getProfileData } from "./getProfileData";

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

describe("getProfileData", () => {
	test("should return profile data", () => {
		const state: DeepPartial<StoreSchema> = {
			profile: { data: profile },
		};

		expect(getProfileData(state as StoreSchema)).toEqual(profile);
	});

	test("should work with empty state", () => {
		const state: DeepPartial<StoreSchema> = {};

		expect(getProfileData(state as StoreSchema)).toBe(undefined);
	});
});
