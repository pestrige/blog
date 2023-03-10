import { ValidateErrorsEnum } from "../types/profileCard";

export const translationValidateErrors: Partial<Record<ValidateErrorsEnum, string>> = {
	[ValidateErrorsEnum.INCORRECT_AGE]: "Некорректный возраст",
	[ValidateErrorsEnum.REQUIRED_FIELD]: "Обязательное поле",
	[ValidateErrorsEnum.SERVER_ERROR]: "Ошибка сервера",
	[ValidateErrorsEnum.EMPTY_DATA]: "Форма не может быть пустой",
};
