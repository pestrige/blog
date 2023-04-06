import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleSort, ArticleType, ArticleView } from "entities/Article";
import { SortOrder } from "shared/types";

export interface ArticlesPageSchema extends EntityState<Article> {
	isLoading?: boolean;
	error?: string;
	view?: ArticleView;

	// pagination
	page: number;
	limit: number;
	hasMore: boolean;

	// filters
	order: SortOrder;
	sort: ArticleSort;
	search: string;
	type: ArticleType;

	_initialized: boolean;
}
