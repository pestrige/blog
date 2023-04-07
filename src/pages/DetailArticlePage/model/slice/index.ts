import { combineReducers } from "@reduxjs/toolkit";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";
import { articleDetailsRecommendReducer } from "./articleDetailsRecommendSlice";
import { ArticleDetailsPageSchema } from "../types";

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
	comments: articleDetailsCommentsReducer,
	recommendations: articleDetailsRecommendReducer,
});
