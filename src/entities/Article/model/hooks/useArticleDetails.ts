import { useAppDispatch, useInitialEffect } from "@/shared/hooks";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";

export const useArticleDetails = (articleId: string) => {
	const dispatch = useAppDispatch();

	useInitialEffect(() => {
		dispatch(fetchArticleById(articleId));
	}, [articleId]);
};
