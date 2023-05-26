import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/config";
import { Article } from "../../types/article";

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
	"articleDetails/fetchArticleById",
	async (articleId, thunkAPI) => {
		const { rejectWithValue, extra } = thunkAPI;
		try {
			const response = await extra.api.get<Article>(`/articles/${articleId}`, {
				params: {
					_expand: "user",
				},
			});

			if (!response.data) {
				return rejectWithValue("error");
			}
			return response.data;
		} catch (e) {
			return rejectWithValue("error");
		}
	},
);
