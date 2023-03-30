import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "shared/config";
import { Article } from "entities/Article";
import { getArticlesLimit } from "../../selectors/articlesPageSelectors";

interface FetchArticlesArgs {
	page?: number;
}

export const fetchArticles = createAsyncThunk<Article[], FetchArticlesArgs, ThunkConfig<string>>(
	"articlesPage/fetchArticles",
	async (args, thunkApi) => {
		const { page = 1 } = args;
		const { extra, rejectWithValue, getState } = thunkApi;
		const limit = getArticlesLimit(getState());

		try {
			const response = await extra.api.get<Article[]>("/articles", {
				params: {
					_expand: "user",
					_page: page,
					_limit: limit,
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
