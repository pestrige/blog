import { createSelector } from "@reduxjs/toolkit";
import { getArticleData } from "entities/Article";
import { getUserData } from "entities/User";
import { useSelector } from "react-redux";

const getCanUserEditArticle = createSelector(getArticleData, getUserData, (article, user) => {
	if (!article || !user) {
		return false;
	}

	return article?.user?.id === user?.id;
});
export const useCanUserEditArticleSelector = () => useSelector(getCanUserEditArticle);
