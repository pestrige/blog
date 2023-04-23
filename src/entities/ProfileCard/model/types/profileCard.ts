import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { ValidateErrorsEnum } from "../constants/constants";

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

export type ValidateErrors = Partial<Record<ProfileCardTypeKeyof, ValidateErrorsEnum>>;

export interface ProfileErrors {
	validateErrors?: ValidateErrors;
	error?: ValidateErrorsEnum;
}
