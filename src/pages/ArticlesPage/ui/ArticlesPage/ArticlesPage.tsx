import { memo, useCallback } from "react";
import { ArticleList } from "entities/Article";
import { ReducersList, useAppDispatch, useDynamicReducerLoader, useInitialEffect } from "shared/hooks";
import { ObservableScrollPage } from "widgets";
import { useSearchParams } from "react-router-dom";
import {
	useArticlesIsLoadingSelector,
	useArticlesSelector,
	useArticlesViewSelector,
} from "../../model/selectors/articlesPageSelectors";
import { fetchNextArticles } from "../../model/services/fetchNextArticles/fetchNextArticles";
import { initializeArticles } from "../../model/services/initializeArticles/initializeArticles";
import { articlesPageReducer } from "../../model/slice/articlesPageSlice";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";

const reducers: ReducersList = { articlesPage: articlesPageReducer };

const ArticlesPage = memo((): JSX.Element => {
	const [searchParams] = useSearchParams();
	const dispatch = useAppDispatch();
	const articles = useArticlesSelector();
	const isLoading = useArticlesIsLoadingSelector();
	const view = useArticlesViewSelector();

	const handleScrollEnd = useCallback(() => {
		dispatch(fetchNextArticles());
	}, [dispatch]);

	useDynamicReducerLoader(reducers, false);
	useInitialEffect(() => {
		dispatch(initializeArticles(searchParams));
	});

	return (
		<ObservableScrollPage onScrollEnd={handleScrollEnd}>
			<ArticlesPageFilters className="big-margin" />
			<ArticleList view={view} articles={articles} isLoading={isLoading} />
		</ObservableScrollPage>
	);
});

export default ArticlesPage;
