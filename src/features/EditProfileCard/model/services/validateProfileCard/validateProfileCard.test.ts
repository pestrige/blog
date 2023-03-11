import { ProfileCardType, ValidateErrorsEnum } from "entities/ProfileCard";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { validateProfileCard } from "./validateProfileCard";

describe("validateProfileCard", () => {
	test("should return no errors", () => {
		const profile: ProfileCardType = {
			first: "Ivan",
			lastname: "Ivanov",
			age: 36,
			currency: Currency.RUB,
			country: Country.Russia,
			city: "Moscow",
			username: "admin",
			avatar: "avatar-url.webp",
		};

		expect(validateProfileCard(profile)).toEqual({ validateErrors: {} });
	});

	test("should return incorrect age error", () => {
		const profile: ProfileCardType = {
			first: "Ivan",
			lastname: "Ivanov",
			age: 364,
			currency: Currency.RUB,
			country: Country.Russia,
			city: "Moscow",
			username: "admin",
			avatar: "avatar-url.webp",
		};

		expect(validateProfileCard(profile)).toEqual({
			validateErrors: { age: ValidateErrorsEnum.INCORRECT_AGE },
		});
	});

	test("should return required field errors", () => {
		const profile: ProfileCardType = {
			first: "",
			lastname: "",
			age: 0,
			currency: Currency.RUB,
			country: Country.Russia,
			city: "",
			username: "",
			avatar: "",
		};

		expect(validateProfileCard(profile)).toEqual({
			validateErrors: {
				first: ValidateErrorsEnum.REQUIRED_FIELD,
				lastname: ValidateErrorsEnum.REQUIRED_FIELD,
				age: ValidateErrorsEnum.REQUIRED_FIELD,
				city: ValidateErrorsEnum.REQUIRED_FIELD,
				username: ValidateErrorsEnum.REQUIRED_FIELD,
				avatar: ValidateErrorsEnum.REQUIRED_FIELD,
			},
		});
	});

	test("should return empty data error", () => {
		expect(validateProfileCard()).toEqual({
			error: ValidateErrorsEnum.EMPTY_DATA,
		});
	});
});
