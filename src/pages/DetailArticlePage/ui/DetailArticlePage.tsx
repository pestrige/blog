import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { ArticleDetails } from "entities/Article";
import { CommentList } from "entities/Comment";
import { AddCommentForm } from "features/AddCommentForm";
import { Text } from "shared/ui";
import { ReducersList, useAppDispatch, useDynamicReducerLoader, useInitialEffect } from "shared/hooks";

import { sendCommentByArticleId } from "../model/services/sendCommentByArticleId";
import { articleDetailsCommentsReducer } from "../model/slice/articleDetailsCommentsSlice";
import {
	useArticleCommentsError,
	useArticleCommentsSelector,
	useIsArticleCommentsLoading,
} from "../model/selectors/selectors";
import { fetchCommentsByArticleId } from "../model/services/fetchCommentsByArticleId";

const reducers: ReducersList = { articleDetailsComments: articleDetailsCommentsReducer };

const DetailArticlePage = memo((): JSX.Element => {
	const { t } = useTranslation("articles");
	const { id } = useParams<{ id: string }>();
	const dispatch = useAppDispatch();
	const comments = useArticleCommentsSelector();
	const isCommentsLoading = useIsArticleCommentsLoading();
	const error = useArticleCommentsError();

	const handleSubmit = useCallback(
		(commentText: string) => {
			dispatch(sendCommentByArticleId(commentText));
		},
		[dispatch]
	);

	useDynamicReducerLoader(reducers);

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id));
	});

	if (!id) {
		return (
			<div className="page">
				<Text title={t("Статья не найдена")} />
			</div>
		);
	}

	return (
		<div className="page">
			<ArticleDetails id={id ?? "1"} className="big-margin" />
			<Text title={t("Комментарии")} className="block-margin" />
			<AddCommentForm onSubmit={handleSubmit} className="block-margin" />
			<CommentList error={error} isLoading={isCommentsLoading} comments={comments} />
		</div>
	);
});

export default DetailArticlePage;
