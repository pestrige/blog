import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../config";
import { FeatureFlags } from "../../../types";
import { getAllFeatureFlags } from "../lib/setGetFeatures";
import { reloadPage } from "../../reloadPage/reloadPage";
import { updateFeatureFlagMutation } from "../api/featureFlagsApi";

interface ThunkArgs {
	userId?: string;
	newFeatures: Partial<FeatureFlags>;
}

export const updateFeatureFlags = createAsyncThunk<void, ThunkArgs, ThunkConfig<string>>(
	"articleDetails/fetchArticleById",
	async ({ userId, newFeatures }, thunkAPI) => {
		const { rejectWithValue, dispatch } = thunkAPI;
		const features = { ...getAllFeatureFlags(), ...newFeatures };

		if (!userId) {
			return rejectWithValue("error");
		}

		try {
			dispatch(updateFeatureFlagMutation({ userId, features }));
			reloadPage();
			return Promise.resolve();
		} catch (e) {
			return rejectWithValue("error");
		}
	},
);
