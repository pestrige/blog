import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Article } from "entities/Article";
import { fetchArticlesRecommendations } from "../services/fetchArticlesRecommendations";
import { ArticleDetailsRecommendSchema } from "../types/ArticleDetailsRecommendSchema";

export const recommendAdapter = createEntityAdapter<Article>({
	selectId: (article) => article.id,
});

export const articleDetailsRecommendSlice = createSlice({
	name: "articleDetailsRecommendSlice",
	initialState: recommendAdapter.getInitialState<ArticleDetailsRecommendSchema>({
		isLoading: false,
		error: undefined,
		ids: [],
		entities: {},
	}),
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticlesRecommendations.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchArticlesRecommendations.fulfilled, (state, action) => {
				state.isLoading = false;
				recommendAdapter.setAll(state, action.payload);
			})
			.addCase(fetchArticlesRecommendations.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: articleDetailsRecommendActions } = articleDetailsRecommendSlice;
export const { reducer: articleDetailsRecommendReducer } = articleDetailsRecommendSlice;
