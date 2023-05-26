import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/config";
import { ArticleSort, ArticleType } from "@/entities/Article";
import { SortOrder } from "@/shared/types";
import { getArticlesInitialized } from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slice/articlesPageSlice";
import { fetchArticles } from "../fetchArticles/fetchArticles";

export const initializeArticles = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
	"articlesPage/initializeArticles",
	async (searchParams, thunkApi) => {
		const { getState, dispatch } = thunkApi;
		const isInitialized = getArticlesInitialized(getState());

		if (!isInitialized) {
			const sortFromUrl = searchParams.get("sort");
			const orderFromUrl = searchParams.get("order");
			const searchFromUrl = searchParams.get("search");
			const typeFromUrl = searchParams.get("type");

			if (sortFromUrl) {
				dispatch(articlesPageActions.setSort(sortFromUrl as ArticleSort));
			}
			if (orderFromUrl) {
				dispatch(articlesPageActions.setOrder(orderFromUrl as SortOrder));
			}
			if (searchFromUrl) {
				dispatch(articlesPageActions.setSearch(searchFromUrl));
			}
			if (typeFromUrl) {
				dispatch(articlesPageActions.setType(typeFromUrl as ArticleType));
			}

			dispatch(articlesPageActions.initState());
			dispatch(fetchArticles({}));
		}
	},
);
