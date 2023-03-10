import React, { useCallback, useEffect } from "react";
import { ProfileCard, ProfileCardTypeKeyof } from "entities/ProfileCard";
import { ReducersList, useAppDispatch, useDynamicReducerLoader } from "shared/hooks";
import {
	fetchProfileData,
	profileActions,
	profileReducer,
	updateProfileData,
	useProfileErrorSelector,
	useProfileFormSelector,
	useProfileLoadingSelector,
	useProfileReadonlySelector,
	useProfileValidateErrorsSelector,
} from "../model";

const reducersList: ReducersList = { profile: profileReducer };

export const EditableProfileCard = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const formData = useProfileFormSelector();
	const isLoading = useProfileLoadingSelector();
	const error = useProfileErrorSelector();
	const validateErrors = useProfileValidateErrorsSelector();
	const readonly = useProfileReadonlySelector();

	const handleInputChange = useCallback(
		(value: string, name: string) => {
			let newValue: string | number = value;
			switch (name) {
				case "age":
					newValue = Number(value.replace(/\D/, ""));
					break;
				default:
					break;
			}
			dispatch(
				profileActions.updateProfile({
					form: { [name]: newValue },
					field: name as ProfileCardTypeKeyof,
				})
			);
		},
		[dispatch]
	);

	const handleSubmit = useCallback(() => {
		dispatch(updateProfileData());
	}, [dispatch]);

	useDynamicReducerLoader(reducersList);

	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);

	return (
		<ProfileCard
			profile={formData}
			isLoading={isLoading}
			error={error}
			validateErrors={validateErrors}
			readonly={readonly}
			onInputChange={handleInputChange}
			onSubmit={handleSubmit}
		/>
	);
};
