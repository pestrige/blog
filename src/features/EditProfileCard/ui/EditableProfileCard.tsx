import React, { useCallback, useEffect } from "react";
import { ProfileCard } from "entities/ProfileCard";
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
} from "../model";

const reducersList: ReducersList = { profile: profileReducer };

export const EditableProfileCard = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const formData = useProfileFormSelector();
	const isLoading = useProfileLoadingSelector();
	const error = useProfileErrorSelector();
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
			dispatch(profileActions.updateProfile({ [name]: newValue }));
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
			readonly={readonly}
			onInputChange={handleInputChange}
			onSubmit={handleSubmit}
		/>
	);
};
