import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/config";
import { Article, ArticleType } from "@/entities/Article";
import { addQueryParams } from "@/shared/lib";
import {
	getArticlesLimit,
	getArticlesOrder,
	getArticlesPage,
	getArticlesSearch,
	getArticlesSort,
	getArticlesType,
} from "../../selectors/articlesPageSelectors";

interface FetchArticlesArgs {
	replace?: boolean;
}

export const fetchArticles = createAsyncThunk<Article[], FetchArticlesArgs, ThunkConfig<string>>(
	"articlesPage/fetchArticles",
	async (args, thunkApi) => {
		const { extra, rejectWithValue, getState } = thunkApi;
		const limit = getArticlesLimit(getState());
		const page = getArticlesPage(getState());
		const order = getArticlesOrder(getState());
		const sort = getArticlesSort(getState());
		const search = getArticlesSearch(getState());
		const type = getArticlesType(getState());

		try {
			addQueryParams({ sort, order, search, type });
			const response = await extra.api.get<Article[]>("/articles", {
				params: {
					_expand: "user",
					_page: page,
					_limit: limit,
					_sort: sort,
					_order: order,
					q: search,
					type_like: type === ArticleType.ALL ? undefined : type,
				},
			});

			if (!response.data) {
				return rejectWithValue("error");
			}

			return response.data;
		} catch (e) {
			return rejectWithValue("error");
		}
	}
);
