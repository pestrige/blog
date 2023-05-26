import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/config";
import { ProfileCardType, ValidateErrorsEnum } from "@/entities/ProfileCard";

export const fetchProfileData = createAsyncThunk<ProfileCardType, string, ThunkConfig<ValidateErrorsEnum>>(
	"profile/fetchProfileData",
	async (profileId, thunkAPI) => {
		const { rejectWithValue, extra } = thunkAPI;
		try {
			const response = await extra.api.get<ProfileCardType>(`/profile/${profileId}`);

			if (!response.data) {
				return rejectWithValue(ValidateErrorsEnum.SERVER_ERROR);
			}
			return response.data;
		} catch (e) {
			return rejectWithValue(ValidateErrorsEnum.SERVER_ERROR);
		}
	},
);
