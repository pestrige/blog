import { ProfileCardType, ValidateErrors, ValidateErrorsEnum } from "entities/ProfileCard";

export interface ProfileSchema {
	data?: ProfileCardType;
	form?: ProfileCardType;
	isLoading: boolean;
	error?: ValidateErrorsEnum;
	readonly: boolean;
	validateErrors: ValidateErrors;
}
