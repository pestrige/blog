import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { ArticleDetails, ArticleList } from "entities/Article";
import { CommentList } from "entities/Comment";
import { AddCommentForm } from "features/AddCommentForm";
import { Text } from "shared/ui";
import { ReducersList, useAppDispatch, useDynamicReducerLoader, useInitialEffect } from "shared/hooks";

import {
	useArticleRecommendSelector,
	useIsArticleRecommendLoading,
} from "../model/selectors/recommendSelectors";
import { fetchArticlesRecommendations } from "../model/services/fetchArticlesRecommendations";
import { sendCommentByArticleId } from "../model/services/sendCommentByArticleId";
import {
	useArticleCommentsError,
	useArticleCommentsSelector,
	useIsArticleCommentsLoading,
} from "../model/selectors/commentsSelectors";
import { fetchCommentsByArticleId } from "../model/services/fetchCommentsByArticleId";
import { articleDetailsPageReducer } from "../model/slice";
import { DetailArticlePageHeader } from "./DetailArticlePageHeader/DetailArticlePageHeader";

const reducers: ReducersList = {
	articleDetailsPage: articleDetailsPageReducer,
};

const DetailArticlePage = memo((): JSX.Element => {
	const { t } = useTranslation("articles");
	const { id } = useParams<{ id: string }>();
	const dispatch = useAppDispatch();
	const comments = useArticleCommentsSelector();
	const isCommentsLoading = useIsArticleCommentsLoading();
	const error = useArticleCommentsError();
	const recommendations = useArticleRecommendSelector();
	const isRecommendationsLoading = useIsArticleRecommendLoading();

	const handleSubmit = useCallback(
		(commentText: string) => {
			dispatch(sendCommentByArticleId(commentText));
		},
		[dispatch]
	);

	useDynamicReducerLoader(reducers);

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id));
		dispatch(fetchArticlesRecommendations());
	});

	if (!id) {
		return (
			<main className="page">
				<Text title={t("Статья не найдена")} />
			</main>
		);
	}

	return (
		<main className="page">
			<DetailArticlePageHeader />
			<ArticleDetails id={id ?? "1"} className="big-margin" />

			<Text title={t("Рекомендуемые")} className="block-margin" />
			<ArticleList
				articles={recommendations}
				isLoading={isRecommendationsLoading}
				className="block-margin"
				target="_blank"
			/>

			<Text title={t("Комментарии")} className="block-margin" />
			<AddCommentForm onSubmit={handleSubmit} className="block-margin" />
			<CommentList error={error} isLoading={isCommentsLoading} comments={comments} />
		</main>
	);
});

export default DetailArticlePage;
