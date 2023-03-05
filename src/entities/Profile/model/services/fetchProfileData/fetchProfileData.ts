import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "shared/config";
import { Profile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
	"profile/fetchProfileData",
	async (_, thunkAPI) => {
		const { rejectWithValue, extra } = thunkAPI;
		try {
			const response = await extra.api.get<Profile>("/profile");

			if (!response.data) {
				return rejectWithValue("error");
			}
			return response.data;
		} catch (e) {
			return rejectWithValue("error");
		}
	}
);
