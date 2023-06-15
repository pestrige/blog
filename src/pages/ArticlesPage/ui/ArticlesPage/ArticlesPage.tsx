import { memo, useCallback } from "react";

import { ObservableScrollPage } from "@/widgets";
import { ReducersList, useAppDispatch, useDynamicReducerLoader } from "@/shared/hooks";
import { ToggleFeaturesWrapper } from "@/shared/lib";
import { fetchNextArticles } from "../../model/services/fetchNextArticles/fetchNextArticles";
import { articlesPageReducer } from "../../model/slice/articlesPageSlice";
import { ArticlesPageRedesigned } from "./ArticlesPageRedesigned";
import { ArticlesPageDeprecated } from "./ArticlesPageDeprecated";

const reducers: ReducersList = { articlesPage: articlesPageReducer };

const ArticlesPage = memo((): JSX.Element => {
	const dispatch = useAppDispatch();

	const handleScrollEnd = useCallback(() => {
		dispatch(fetchNextArticles());
	}, [dispatch]);

	useDynamicReducerLoader(reducers, false);

	return (
		<ObservableScrollPage testId="ArticlesPage" onScrollEnd={handleScrollEnd}>
			<ToggleFeaturesWrapper
				featureName="isAppRedesigned"
				on={<ArticlesPageRedesigned />}
				off={<ArticlesPageDeprecated />}
			/>
		</ObservableScrollPage>
	);
});

export default ArticlesPage;
