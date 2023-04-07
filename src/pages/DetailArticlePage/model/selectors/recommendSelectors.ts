import { StoreSchema } from "shared/config";
import { useSelector } from "react-redux";
import { recommendAdapter } from "../slice/articleDetailsRecommendSlice";

export const getArticleRecommend = recommendAdapter.getSelectors<StoreSchema>(
	(state) => state.articleDetailsPage?.recommendations || recommendAdapter.getInitialState()
);
export const useArticleRecommendSelector = () => useSelector(getArticleRecommend.selectAll);

export const getIsArticleRecommendLoading = (store: StoreSchema) =>
	store.articleDetailsPage?.recommendations?.isLoading;
export const useIsArticleRecommendLoading = () => useSelector(getIsArticleRecommendLoading);
