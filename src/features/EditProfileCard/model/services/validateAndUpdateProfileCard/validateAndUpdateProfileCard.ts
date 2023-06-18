import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/config";
import { ProfileErrors } from "@/entities/ProfileCard";
import { getProfileFormData } from "../../selectors/getProfileFormData/getProfileFormData";
import { validateProfileCard } from "../validateProfileCard/validateProfileCard";
import { updateProfileData } from "../../services/updateProfileData/updateProfileData";
import { profileActions } from "../../slice/profileSlice";

export const validateAndUpdateProfileData = createAsyncThunk<void, void, ThunkConfig<ProfileErrors>>(
	"profile/validateAndUpdateProfileData",
	async (_, thunkAPI) => {
		const { getState, dispatch } = thunkAPI;
		const formData = getProfileFormData(getState());
		const validateErrors = validateProfileCard(formData);

		if (validateErrors.validateErrors && Object.values(validateErrors.validateErrors).length) {
			dispatch(profileActions.setFormErrors(validateErrors));
			return;
		}

		dispatch(updateProfileData());
	},
);
