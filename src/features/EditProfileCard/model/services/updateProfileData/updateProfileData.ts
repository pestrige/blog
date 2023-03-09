import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "shared/config";
import { ProfileCardType } from "entities/ProfileCard";
import { getProfileFormData } from "../../selectors/getProfileFormData/getProfileFormData";

export const updateProfileData = createAsyncThunk<ProfileCardType, void, ThunkConfig<string>>(
	"profile/updateProfileData",
	async (_, thunkAPI) => {
		const { rejectWithValue, extra, getState } = thunkAPI;
		const formData = getProfileFormData(getState());

		try {
			const response = await extra.api.put<ProfileCardType>("/profile", formData);

			if (!response.data) {
				return rejectWithValue("error");
			}
			return response.data;
		} catch (e) {
			return rejectWithValue("error");
		}
	}
);
