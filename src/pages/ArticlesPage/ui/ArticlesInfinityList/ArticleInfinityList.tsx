import { memo } from "react";
import { useSearchParams } from "react-router-dom";

import { ArticleList } from "@/entities/Article";
import { useAppDispatch, useInitialEffect } from "@/shared/hooks";
import {
	useArticlesIsLoadingSelector,
	useArticlesSelector,
	useArticlesViewSelector,
} from "../../model/selectors/articlesPageSelectors";
import { initializeArticles } from "../../model/services/initializeArticles/initializeArticles";

export const ArticleInfinityList = memo(function ArticleInfinityList(): JSX.Element {
	const dispatch = useAppDispatch();
	const [searchParams] = useSearchParams();
	const articles = useArticlesSelector();
	const isLoading = useArticlesIsLoadingSelector();
	const view = useArticlesViewSelector();

	useInitialEffect(() => {
		dispatch(initializeArticles(searchParams));
	});

	return <ArticleList view={view} articles={articles} isLoading={isLoading} />;
});
