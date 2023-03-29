import { useSelector } from "react-redux";
import { StoreSchema } from "shared/config";
import { ArticleView } from "entities/Article";
import { articlesAdapter } from "../slice/articlesPageSlice";

export const getArticles = articlesAdapter.getSelectors<StoreSchema>(
	(store) => store.articlesPage || articlesAdapter.getInitialState()
);
export const useArticlesSelector = () => useSelector(getArticles.selectAll);

export const getArticlesIsLoading = (store: StoreSchema) => store?.articlesPage?.isLoading ?? false;
export const useArticlesIsLoadingSelector = () => useSelector(getArticlesIsLoading);

export const getArticlesView = (store: StoreSchema) => store?.articlesPage?.view ?? ArticleView.GRID;
export const useArticlesViewSelector = () => useSelector(getArticlesView);

export const getArticlesLimit = (store: StoreSchema) => store?.articlesPage?.limit ?? 4;
export const getArticlesPage = (store: StoreSchema) => store?.articlesPage?.page ?? 1;
export const getArticlesHasMore = (store: StoreSchema) => store?.articlesPage?.hasMore ?? true;
