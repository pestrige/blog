import { StoreSchema } from "shared/config";
import { useSelector } from "react-redux";
import { commentsAdapter } from "../slice/articleDetailsCommentsSlice";

export const getArticleComments = commentsAdapter.getSelectors<StoreSchema>(
	(state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
);
export const useArticleCommentsSelector = () => useSelector(getArticleComments.selectAll);

export const getIsArticleCommentsLoading = (store: StoreSchema) =>
	store.articleDetailsPage?.comments?.isLoading;
export const useIsArticleCommentsLoading = () => useSelector(getIsArticleCommentsLoading);

export const getArticleCommentsError = (store: StoreSchema) =>
	store.articleDetailsPage?.comments?.error ?? "";
export const useArticleCommentsError = () => useSelector(getArticleCommentsError);
