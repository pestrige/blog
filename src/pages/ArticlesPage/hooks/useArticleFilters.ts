import { useCallback } from "react";
import { ArticleSort, ArticleType, ArticleView } from "@/entities/Article";
import { SortOrder } from "@/shared/types";
import { useAppDispatch, useDebounceCallback } from "@/shared/hooks";
import {
	useArticlesOrderSelector,
	useArticlesSearchSelector,
	useArticlesSortSelector,
	useArticlesTypeSelector,
	useArticlesViewSelector,
} from "../model/selectors/articlesPageSelectors";
import { articlesPageActions } from "../model/slice/articlesPageSlice";
import { fetchArticles } from "../model/services/fetchArticles/fetchArticles";

export const useArticleFilters = () => {
	const dispatch = useAppDispatch();
	const sort = useArticlesSortSelector();
	const order = useArticlesOrderSelector();
	const view = useArticlesViewSelector();
	const search = useArticlesSearchSelector();
	const type = useArticlesTypeSelector();

	const fetchData = useCallback(() => {
		dispatch(fetchArticles({ replace: true }));
	}, [dispatch]);

	const debounceFetchData = useDebounceCallback(fetchData);

	const handleViewSwitch = useCallback(
		(view: ArticleView) => {
			dispatch(articlesPageActions.setView(view));
		},
		[dispatch],
	);

	const handleChangeSearch = useCallback(
		(search: string) => {
			dispatch(articlesPageActions.setSearch(search));
			dispatch(articlesPageActions.setPage(1));
			debounceFetchData();
		},
		[debounceFetchData, dispatch],
	);
	const handleChangeType = useCallback(
		(type: string) => {
			dispatch(articlesPageActions.setType(type as ArticleType));
			dispatch(articlesPageActions.setPage(1));
			debounceFetchData();
		},
		[debounceFetchData, dispatch],
	);

	const handleChangeSort = useCallback(
		(newSort: ArticleSort) => {
			dispatch(articlesPageActions.setSort(newSort));
			dispatch(articlesPageActions.setPage(1));
			debounceFetchData();
		},
		[debounceFetchData, dispatch],
	);
	const handleChangeOrder = useCallback(
		(newOrder: SortOrder) => {
			dispatch(articlesPageActions.setOrder(newOrder));
			dispatch(articlesPageActions.setPage(1));
			debounceFetchData();
		},
		[debounceFetchData, dispatch],
	);

	return {
		view,
		sort,
		order,
		search,
		type,
		onChangeView: handleViewSwitch,
		onChangeSort: handleChangeSort,
		onChangeOrder: handleChangeOrder,
		onChangeSearch: handleChangeSearch,
		onChangeType: handleChangeType,
	};
};
