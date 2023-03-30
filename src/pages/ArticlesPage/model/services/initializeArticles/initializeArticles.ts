import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "shared/config";
import { getArticlesInitialized } from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slice/articlesPageSlice";
import { fetchArticles } from "../fetchArticles/fetchArticles";

export const initializeArticles = createAsyncThunk<void, void, ThunkConfig<string>>(
	"articlesPage/initializeArticles",
	async (_, thunkApi) => {
		const { getState, dispatch } = thunkApi;
		const isInitialized = getArticlesInitialized(getState());

		if (!isInitialized) {
			dispatch(articlesPageActions.initState());
			dispatch(fetchArticles({ page: 1 }));
		}
	}
);
