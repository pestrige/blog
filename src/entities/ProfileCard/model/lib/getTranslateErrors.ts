import { translationValidateErrors } from "../constants/constants";
import { ProfileCardTypeKeyof, ValidateErrors } from "../types/profileCard";

export const getTranslateErrors = (errors: ValidateErrors, field: ProfileCardTypeKeyof): string => {
	if (errors[field]) {
		const errorName = errors[field];
		if (errorName) {
			return translationValidateErrors[errorName] ?? "";
		}
	}
	return "";
};
