import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "shared/config";
import {
	getArticlesHasMore,
	getArticlesIsLoading,
	getArticlesPage,
} from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slice/articlesPageSlice";
import { fetchArticles } from "../fetchArticles/fetchArticles";

export const fetchNextArticles = createAsyncThunk<void, void, ThunkConfig<string>>(
	"articlesPage/fetchNextArticles",
	async (_, thunkApi) => {
		const { getState, dispatch } = thunkApi;
		const hasMore = getArticlesHasMore(getState());
		const page = getArticlesPage(getState());
		const isLoading = getArticlesIsLoading(getState());

		if (!isLoading && hasMore) {
			dispatch(articlesPageActions.setPage(page + 1));
			dispatch(fetchArticles({}));
		}
	}
);
