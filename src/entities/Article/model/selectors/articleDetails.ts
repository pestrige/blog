import { StoreSchema } from "@/shared/config";
import { buildSelector } from "@/shared/lib";

export const [useArticleDataSelector, getArticleData] = buildSelector(
	(store: StoreSchema) => store?.articleDetails?.data,
);

export const [useIsArticleLoadingSelector, getIsArticleLoading] = buildSelector(
	(store: StoreSchema) => store?.articleDetails?.isLoading ?? true,
);

export const [useArticleErrorSelector, getArticleError] = buildSelector(
	(store: StoreSchema) => store?.articleDetails?.error ?? "",
);
