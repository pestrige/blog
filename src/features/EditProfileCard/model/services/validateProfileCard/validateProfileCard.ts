import {
	ProfileCardType,
	ProfileCardTypeKeyof,
	ProfileErrors,
	ValidateErrors,
	ValidateErrorsEnum,
} from "entities/ProfileCard";

export const validateProfileCard = (profile?: ProfileCardType): ProfileErrors => {
	const errors: ValidateErrors = {};
	if (!profile) {
		return { error: ValidateErrorsEnum.EMPTY_DATA };
	}
	const { age } = profile;
	const profileKeys = Object.keys(profile) as ProfileCardTypeKeyof[];

	profileKeys.forEach((key) => {
		if (!profile[key]) {
			errors[key] = ValidateErrorsEnum.REQUIRED_FIELD;
		}
	});

	if (age && age > 120) {
		errors.age = ValidateErrorsEnum.INCORRECT_AGE;
	}

	return { validateErrors: errors };
};
