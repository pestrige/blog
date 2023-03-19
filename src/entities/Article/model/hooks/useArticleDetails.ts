import { useEffect } from "react";
import { useAppDispatch } from "shared/hooks";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";

export const useArticleDetails = (articleId: string) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (__PROJECT__ === "storybook") {
			return;
		}
		dispatch(fetchArticleById(articleId));
	}, [dispatch, articleId]);
};
