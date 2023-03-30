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
		page: 1,
		hasMore: true,
		_initialized: false,
	}),
	reducers: {
		setView: (state, action: PayloadAction<ArticleView>) => {
			state.view = action.payload;
			localStorage.setItem(ARTICLES_VIEW_KEY, action.payload);
			state.limit = action.payload === ArticleView.LIST ? 4 : 9;
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		initState: (state) => {
			const view = localStorage.getItem(ARTICLES_VIEW_KEY) as ArticleView;
			state.view = view;
			state.limit = view === ArticleView.LIST ? 4 : 9;
			state._initialized = true;
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
				state.hasMore = action.payload?.length > 0;
				articlesAdapter.addMany(state, action.payload);
			})
			.addCase(fetchArticles.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
