import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "shared/config";
import { Article } from "entities/Article";

export const fetchArticles = createAsyncThunk<Article[], void, ThunkConfig<string>>(
	"articlesPage/fetchArticles",
	async (_, thunkApi) => {
		const { extra, rejectWithValue } = thunkApi;

		try {
			const response = await extra.api.get<Article[]>("/articles", {
				params: {
					_expand: "user",
				},
			});

			if (!response.data) {
				rejectWithValue("error");
			}

			return response.data;
		} catch (e) {
			return rejectWithValue("error");
		}
	}
);
