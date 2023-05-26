import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/config";
import { ProfileCardType, ProfileErrors, ValidateErrorsEnum } from "@/entities/ProfileCard";
import { getProfileFormData } from "../../selectors/getProfileFormData/getProfileFormData";
import { validateProfileCard } from "../validateProfileCard/validateProfileCard";

export const updateProfileData = createAsyncThunk<ProfileCardType, void, ThunkConfig<ProfileErrors>>(
	"profile/updateProfileData",
	async (_, thunkAPI) => {
		const { rejectWithValue, extra, getState } = thunkAPI;
		const formData = getProfileFormData(getState());
		const validateErrors = validateProfileCard(formData);

		if (validateErrors.validateErrors && Object.values(validateErrors.validateErrors).length) {
			return rejectWithValue(validateErrors);
		}

		try {
			const response = await extra.api.put<ProfileCardType>(`/profile/${formData?.id}`, formData);

			if (!response.data) {
				return rejectWithValue({ error: ValidateErrorsEnum.SERVER_ERROR });
			}
			return response.data;
		} catch (e) {
			return rejectWithValue({ error: ValidateErrorsEnum.SERVER_ERROR });
		}
	},
);
