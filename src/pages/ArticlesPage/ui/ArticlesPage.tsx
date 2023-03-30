import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ArticleList, ArticleView, ArticleViewSwitcher } from "entities/Article";
import { ObservableScrollPage, Text } from "shared/ui";
import { ReducersList, useAppDispatch, useDynamicReducerLoader, useInitialEffect } from "shared/hooks";
import {
	useArticlesIsLoadingSelector,
	useArticlesSelector,
	useArticlesViewSelector,
} from "../model/selectors/articlesPageSelectors";
import { fetchNextArticles } from "../model/services/fetchNextArticles/fetchNextArticles";
import { initializeArticles } from "../model/services/initializeArticles/initializeArticles";
import { articlesPageActions, articlesPageReducer } from "../model/slice/articlesPageSlice";

const reducers: ReducersList = { articlesPage: articlesPageReducer };

const ArticlesPage = memo((): JSX.Element => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const articles = useArticlesSelector();
	const isLoading = useArticlesIsLoadingSelector();
	const view = useArticlesViewSelector();

	const handleViewSwitch = useCallback(
		(view: ArticleView) => {
			dispatch(articlesPageActions.setView(view));
		},
		[dispatch]
	);

	const handleScrollEnd = useCallback(() => {
		dispatch(fetchNextArticles());
	}, [dispatch]);

	useDynamicReducerLoader(reducers, false);
	useInitialEffect(() => {
		dispatch(initializeArticles());
	});

	return (
		<ObservableScrollPage onScrollEnd={handleScrollEnd}>
			<Text title={t("Статьи")} />
			<ArticleViewSwitcher activeView={view} onViewSwitch={handleViewSwitch} />
			<ArticleList view={view} articles={articles} isLoading={isLoading} />
		</ObservableScrollPage>
	);
});

export default ArticlesPage;
