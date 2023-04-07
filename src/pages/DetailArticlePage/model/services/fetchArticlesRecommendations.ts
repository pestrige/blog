import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "shared/config";
import { Article } from "entities/Article";

export const fetchArticlesRecommendations = createAsyncThunk<Article[], void, ThunkConfig<string>>(
	"articleDetails/fetchArticlesRecommendations",
	async (_, thunkApi) => {
		const { extra, rejectWithValue } = thunkApi;

		try {
			const response = await extra.api.get<Article[]>("/articles", {
				params: {
					_limit: 4,
				},
			});

			if (!response.data) {
				return rejectWithValue("error");
			}

			return response.data;
		} catch (e) {
			return rejectWithValue("error");
		}
	}
);
