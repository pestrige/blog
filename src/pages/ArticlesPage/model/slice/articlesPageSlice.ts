import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article, ArticleSort, ArticleView } from "entities/Article";
import { ARTICLES_VIEW_KEY } from "shared/constants";
import { SortOrder } from "shared/types";
import { ArticleType } from "entities/Article/model/types/article";
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
		order: "asc",
		sort: ArticleSort.CREATED,
		search: "",
		limit: 9,
		type: ArticleType.ALL,
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
		setOrder: (state, action: PayloadAction<SortOrder>) => {
			state.order = action.payload;
		},
		setSort: (state, action: PayloadAction<ArticleSort>) => {
			state.sort = action.payload;
		},
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},
		setType: (state, action: PayloadAction<ArticleType>) => {
			state.type = action.payload;
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
			.addCase(fetchArticles.pending, (state, action) => {
				state.error = "";
				state.isLoading = true;
				if (action.meta.arg.replace) {
					articlesAdapter.removeAll(state);
				}
			})
			.addCase(fetchArticles.fulfilled, (state, action) => {
				state.isLoading = false;
				state.hasMore = action.payload?.length >= state.limit;
				if (action.meta.arg.replace) {
					articlesAdapter.setAll(state, action.payload);
				} else {
					articlesAdapter.addMany(state, action.payload);
				}
			})
			.addCase(fetchArticles.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
