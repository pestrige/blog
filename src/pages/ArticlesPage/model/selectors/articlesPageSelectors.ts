import { useSelector } from "react-redux";
import { StoreSchema } from "@/shared/config";
import { ArticleSort, ArticleType, ArticleView } from "@/entities/Article";
import { articlesAdapter } from "../slice/articlesPageAdapter";

export const getArticles = articlesAdapter?.getSelectors<StoreSchema>(
	(store) => store.articlesPage || articlesAdapter.getInitialState(),
);
export const useArticlesSelector = () => useSelector(getArticles.selectAll);

export const getArticlesIsLoading = (store: StoreSchema) => store?.articlesPage?.isLoading ?? true;
export const useArticlesIsLoadingSelector = () => useSelector(getArticlesIsLoading);

export const getArticlesView = (store: StoreSchema) => store?.articlesPage?.view ?? ArticleView.GRID;
export const useArticlesViewSelector = () => useSelector(getArticlesView);

export const getArticlesLimit = (store: StoreSchema) => store?.articlesPage?.limit ?? 9;
export const getArticlesPage = (store: StoreSchema) => store?.articlesPage?.page ?? 1;
export const getArticlesHasMore = (store: StoreSchema) => store?.articlesPage?.hasMore ?? true;
export const getArticlesInitialized = (store: StoreSchema) => store?.articlesPage?._initialized;

export const getArticlesSort = (store: StoreSchema) => store?.articlesPage?.sort ?? ArticleSort.CREATED;
export const useArticlesSortSelector = () => useSelector(getArticlesSort);
export const getArticlesOrder = (store: StoreSchema) => store?.articlesPage?.order ?? "desc";
export const useArticlesOrderSelector = () => useSelector(getArticlesOrder);
export const getArticlesSearch = (store: StoreSchema) => store?.articlesPage?.search ?? "";
export const useArticlesSearchSelector = () => useSelector(getArticlesSearch);
export const getArticlesType = (store: StoreSchema) => store?.articlesPage?.type ?? ArticleType.ALL;
export const useArticlesTypeSelector = () => useSelector(getArticlesType);
