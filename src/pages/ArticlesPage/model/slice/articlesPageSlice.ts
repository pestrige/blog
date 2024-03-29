import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleSort, ArticleView, ArticleType } from "@/entities/Article";
import { StorageKeys } from "@/shared/constants";
import { SortOrder } from "@/shared/types";
import { LocalStorage } from "@/shared/lib";
import { ArticlesPageSchema } from "../types/articlesPageSchema";
import { fetchArticles } from "../services/fetchArticles/fetchArticles";
import { articlesAdapter } from "./articlesPageAdapter";

export const articlesPageSlice = createSlice({
	name: "articlesPageSlice",
	initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
		isLoading: true,
		error: "",
		view: ArticleView.LIST,
		ids: [],
		entities: {},
		page: 1,
		hasMore: true,
		order: "asc",
		sort: ArticleSort.CREATED,
		search: "",
		limit: 4,
		type: ArticleType.ALL,
		_initialized: false,
		_isFirstRequest: true,
	}),
	reducers: {
		setView: (state, action: PayloadAction<ArticleView>) => {
			state.view = action.payload;
			LocalStorage.setItem(StorageKeys.ARTICLES_VIEW_KEY, action.payload);
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
			const view = LocalStorage.getItem(StorageKeys.ARTICLES_VIEW_KEY) as ArticleView;
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
					state._isFirstRequest = true;
					articlesAdapter.removeAll(state);
				}
			})
			.addCase(fetchArticles.fulfilled, (state, action) => {
				state.isLoading = false;
				state._isFirstRequest = false;
				state.hasMore = action.payload?.length >= state.limit;
				if (action.meta.arg.replace) {
					articlesAdapter.setAll(state, action.payload);
				} else {
					articlesAdapter.addMany(state, action.payload);
				}
			})
			.addCase(fetchArticles.rejected, (state, action) => {
				state.isLoading = false;
				state._isFirstRequest = false;
				state.error = action.payload;
			});
	},
});

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
