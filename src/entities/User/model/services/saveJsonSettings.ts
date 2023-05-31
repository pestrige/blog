import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/config";
import { JsonSettings } from "../types/jsonSettings";
import { getUserData } from "../selectors/userSelectors";
import { setJsonSettingsMutation } from "../../api/userApi";

export const saveJsonSettings = createAsyncThunk<JsonSettings, JsonSettings, ThunkConfig<string>>(
	"user/saveJsonSettings",
	async (newJsonSettings, thunkAPI) => {
		const { rejectWithValue, getState, dispatch } = thunkAPI;
		const userData = getUserData(getState());
		const currentJsonSettings = userData?.jsonSettings ?? {};

		if (!userData) {
			return rejectWithValue("error");
		}

		try {
			const response = await dispatch(
				setJsonSettingsMutation({
					userId: userData.id,
					jsonSettings: {
						...currentJsonSettings,
						...newJsonSettings,
					},
				}),
			).unwrap();

			if (!response?.jsonSettings) {
				return rejectWithValue("error");
			}
			return response.jsonSettings;
		} catch (e) {
			return rejectWithValue("error");
		}
	},
);
