import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "shared/config";
import { ProfileCardType } from "entities/ProfileCard";

export const fetchProfileData = createAsyncThunk<ProfileCardType, void, ThunkConfig<string>>(
	"profile/fetchProfileData",
	async (_, thunkAPI) => {
		const { rejectWithValue, extra } = thunkAPI;
		try {
			const response = await extra.api.get<ProfileCardType>("/profile");

			if (!response.data) {
				return rejectWithValue("error");
			}
			return response.data;
		} catch (e) {
			return rejectWithValue("error");
		}
	}
);
