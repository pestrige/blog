import { StoreSchema } from "shared/config";
import { useSelector } from "react-redux";

export const getArticleData = (store: StoreSchema) => store?.articleDetails?.data;
export const useArticleDataSelector = () => useSelector(getArticleData);

export const getIsArticleLoading = (store: StoreSchema) => store?.articleDetails?.isLoading ?? true;
export const useIsArticleLoadingSelector = () => useSelector(getIsArticleLoading);

export const getArticleError = (store: StoreSchema) => store?.articleDetails?.error ?? "";
export const useArticleErrorSelector = () => useSelector(getArticleError);
