import { ProfileInputsItem } from "../types/profileCard";

export enum ValidateErrorsEnum {
	REQUIRED_FIELD = "REQUIRED_FIELD",
	INCORRECT_AGE = "INCORRECT_AGE",
	EMPTY_DATA = "EMPTY_DATA",
	SERVER_ERROR = "SERVER_ERROR",
}

export const translationValidateErrors: Partial<Record<ValidateErrorsEnum, string>> = {
	[ValidateErrorsEnum.INCORRECT_AGE]: "Некорректный возраст",
	[ValidateErrorsEnum.REQUIRED_FIELD]: "Обязательное поле",
	[ValidateErrorsEnum.SERVER_ERROR]: "Ошибка сервера",
	[ValidateErrorsEnum.EMPTY_DATA]: "Форма не может быть пустой",
};

export const profileInputs: ProfileInputsItem[] = [
	{ name: "first", label: "Ваше имя" },
	{ name: "lastname", label: "Ваша фамилия" },
	{ name: "age", label: "Ваш возраст" },
	{ name: "city", label: "Ваш город" },
	{ name: "username", label: "Ваш ник" },
	{ name: "avatar", label: "Ваш аватар" },
];
