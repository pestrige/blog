import React, { FormEvent } from "react";
import { ToggleFeaturesWrapper } from "@/shared/lib";
import { ValidateErrorsEnum } from "../../model/constants/constants";
import { ProfileCardType, ValidateErrors } from "../../model/types/profileCard";
import { Deprecated } from "./Deprecated";
import { Redesigned } from "./Redesigned";

export interface ProfileCardProps {
	profile?: ProfileCardType;
	isLoading: boolean;
	error?: ValidateErrorsEnum;
	validateErrors: ValidateErrors;
	readonly: boolean;
	onInputChange: (value: string, name: string) => void;
	onSubmit: (evt: FormEvent<HTMLFormElement>) => void;
}

export const ProfileCard = (props: ProfileCardProps): JSX.Element => {
	return (
		<ToggleFeaturesWrapper
			featureName="isAppRedesigned"
			on={<Redesigned {...props} />}
			off={<Deprecated {...props} />}
		/>
	);
};
