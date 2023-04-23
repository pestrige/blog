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
