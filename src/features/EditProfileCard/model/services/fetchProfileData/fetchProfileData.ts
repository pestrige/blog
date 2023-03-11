import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "shared/config";
import { ProfileCardType, ValidateErrorsEnum } from "entities/ProfileCard";

export const fetchProfileData = createAsyncThunk<ProfileCardType, void, ThunkConfig<ValidateErrorsEnum>>(
	"profile/fetchProfileData",
	async (_, thunkAPI) => {
		const { rejectWithValue, extra } = thunkAPI;
		try {
			const response = await extra.api.get<ProfileCardType>("/profile");

			if (!response.data) {
				throw new Error();
			}
			return response.data;
		} catch (e) {
			return rejectWithValue(ValidateErrorsEnum.SERVER_ERROR);
		}
	}
);
