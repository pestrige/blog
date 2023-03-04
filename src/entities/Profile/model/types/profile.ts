import { Country, Currency } from "shared/constants";

export interface Profile {
	first: string;
	lastname: string;
	age: 22;
	currency: Currency;
	country: Country;
	city: string;
	username: string;
	avatar: string;
}

export interface ProfileSchema {
	data?: Profile;
	isLoading: boolean;
	error: string;
	readonly: boolean;
}
