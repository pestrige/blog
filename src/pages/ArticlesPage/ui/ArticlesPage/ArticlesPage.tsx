import { memo, useCallback } from "react";

import { ReducersList, useAppDispatch, useDynamicReducerLoader } from "shared/hooks";
import { ObservableScrollPage } from "widgets";
import { fetchNextArticles } from "../../model/services/fetchNextArticles/fetchNextArticles";
import { articlesPageReducer } from "../../model/slice/articlesPageSlice";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";
import { ArticleInfinityList } from "../ArticlesInfinityList/ArticleInfinityList";

const reducers: ReducersList = { articlesPage: articlesPageReducer };

const ArticlesPage = memo((): JSX.Element => {
	const dispatch = useAppDispatch();

	const handleScrollEnd = useCallback(() => {
		dispatch(fetchNextArticles());
	}, [dispatch]);

	useDynamicReducerLoader(reducers, false);

	return (
		<ObservableScrollPage onScrollEnd={handleScrollEnd}>
			<ArticlesPageFilters className="big-margin" />
			<ArticleInfinityList />
		</ObservableScrollPage>
	);
});

export default ArticlesPage;
