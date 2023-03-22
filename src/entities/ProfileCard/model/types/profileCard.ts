import { Currency } from "entities/Currency";
import { Country } from "entities/Country";

export interface ProfileCardType {
	id?: string;
	first?: string;
	lastname?: string;
	age?: number;
	currency?: Currency;
	country?: Country;
	city?: string;
	username?: string;
	avatar?: string;
}

export type ProfileCardTypeKeyof = keyof ProfileCardType;

export enum ValidateErrorsEnum {
	REQUIRED_FIELD = "REQUIRED_FIELD",
	INCORRECT_AGE = "INCORRECT_AGE",
	EMPTY_DATA = "EMPTY_DATA",
	SERVER_ERROR = "SERVER_ERROR",
}

export type ValidateErrors = Partial<Record<ProfileCardTypeKeyof, ValidateErrorsEnum>>;

export interface ProfileErrors {
	validateErrors?: ValidateErrors;
	error?: ValidateErrorsEnum;
}
