import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ArticleList, ArticleView, ArticleViewSwitcher } from "entities/Article";
import { Text } from "shared/ui";
import { ReducersList, useAppDispatch, useDynamicReducerLoader, useInitialEffect } from "shared/hooks";
import {
	useArticlesIsLoadingSelector,
	useArticlesSelector,
	useArticlesViewSelector,
} from "../model/selectors/articlesPageSelectors";
import { fetchArticles } from "../model/services/fetchArticles/fetchArticles";
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

	useDynamicReducerLoader(reducers);

	useInitialEffect(() => {
		dispatch(fetchArticles());
		dispatch(articlesPageActions.initState());
	});

	return (
		<div className="page">
			<Text title={t("Статьи")} />
			<ArticleViewSwitcher activeView={view} onViewSwitch={handleViewSwitch} />
			<ArticleList view={view} articles={articles} isLoading={isLoading} />
		</div>
	);
});

export default ArticlesPage;
