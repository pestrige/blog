import { memo, useCallback } from "react";
import {
	ArticleSort,
	ArticleSortSelector,
	ArticleType,
	ArticleTypeTabs,
	ArticleView,
	ArticleViewSwitcher,
} from "entities/Article";
import { useAppDispatch, useDebounceCallback } from "shared/hooks";
import { Card, Input } from "shared/ui";
import { useTranslation } from "react-i18next";
import { SortOrder } from "shared/types";
import { fetchArticles } from "../../model/services/fetchArticles/fetchArticles";
import {
	useArticlesOrderSelector,
	useArticlesSearchSelector,
	useArticlesSortSelector,
	useArticlesTypeSelector,
	useArticlesViewSelector,
} from "../../model/selectors/articlesPageSelectors";
import { articlesPageActions } from "../../model/slice/articlesPageSlice";
import cls from "./ArticlesPageFilters.module.scss";

interface Props {
	className?: string;
}

export const ArticlesPageFilters = memo(({ className }: Props): JSX.Element => {
	const dispatch = useAppDispatch();
	const { t } = useTranslation("articles");
	const view = useArticlesViewSelector();
	const sort = useArticlesSortSelector();
	const order = useArticlesOrderSelector();
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
		[dispatch]
	);

	const handleChangeSort = useCallback(
		(newSort: ArticleSort) => {
			dispatch(articlesPageActions.setSort(newSort));
			dispatch(articlesPageActions.setPage(1));
			debounceFetchData();
		},
		[debounceFetchData, dispatch]
	);
	const handleChangeOrder = useCallback(
		(newOrder: SortOrder) => {
			dispatch(articlesPageActions.setOrder(newOrder));
			dispatch(articlesPageActions.setPage(1));
			debounceFetchData();
		},
		[debounceFetchData, dispatch]
	);
	const handleChangeSearch = useCallback(
		(search: string) => {
			dispatch(articlesPageActions.setSearch(search));
			dispatch(articlesPageActions.setPage(1));
			debounceFetchData();
		},
		[debounceFetchData, dispatch]
	);
	const handleChangeType = useCallback(
		(type: string) => {
			dispatch(articlesPageActions.setType(type as ArticleType));
			dispatch(articlesPageActions.setPage(1));
			debounceFetchData();
		},
		[debounceFetchData, dispatch]
	);

	return (
		<div className={className}>
			<div className={cls.sortWrapper}>
				<ArticleSortSelector
					sort={sort}
					order={order}
					onChangeSort={handleChangeSort}
					onChangeOrder={handleChangeOrder}
				/>
				<ArticleViewSwitcher activeView={view} onViewSwitch={handleViewSwitch} />
			</div>

			<Card className={cls.search}>
				<Input
					name="articlesSearch"
					placeholder={t("Поиск")}
					value={search}
					onChange={handleChangeSearch}
				/>
			</Card>

			<ArticleTypeTabs type={type} onTabClick={handleChangeType} />
		</div>
	);
});
