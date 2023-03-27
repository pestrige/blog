import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article, ArticleView } from "entities/Article";
import { ARTICLES_VIEW_KEY } from "shared/constants";
import { ArticlesPageSchema } from "../types/articlesPageSchema";
import { fetchArticles } from "../services/fetchArticles/fetchArticles";

export const articlesAdapter = createEntityAdapter<Article>({
	selectId: (article) => article.id,
});

export const articlesPageSlice = createSlice({
	name: "articlesPageSlice",
	initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
		isLoading: false,
		error: "",
		view: ArticleView.GRID,
		ids: [],
		entities: {},
	}),
	reducers: {
		setView: (state, action: PayloadAction<ArticleView>) => {
			state.view = action.payload;
			localStorage.setItem(ARTICLES_VIEW_KEY, action.payload);
		},
		initState: (state) => {
			state.view = localStorage.getItem(ARTICLES_VIEW_KEY) as ArticleView;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticles.pending, (state) => {
				state.error = "";
				state.isLoading = true;
			})
			.addCase(fetchArticles.fulfilled, (state, action: PayloadAction<Article[]>) => {
				state.isLoading = false;
				articlesAdapter.setAll(state, action.payload);
			})
			.addCase(fetchArticles.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
