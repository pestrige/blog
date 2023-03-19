import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleDetailsSchema } from "../types/articleDetailsSchema";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";
import { Article } from "../types/article";

const initialState: ArticleDetailsSchema = {
	data: undefined,
	isLoading: true,
	error: undefined,
};

export const articleDetailsSlice = createSlice({
	name: "articleDetails",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchArticleById.pending, (state) => {
			state.error = undefined;
			state.isLoading = true;
		});
		builder.addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
			state.isLoading = false;
			state.data = action.payload;
		});
		builder.addCase(fetchArticleById.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	},
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
