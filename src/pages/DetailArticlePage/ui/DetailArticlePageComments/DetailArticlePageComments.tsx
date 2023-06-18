import React, { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { AddCommentForm } from "@/features/AddCommentForm";
import { CommentList } from "@/entities/Comment";
import { Text, TextDeprecated } from "@/shared/ui";
import { useAppDispatch, useInitialEffect } from "@/shared/hooks";
import { ToggleFeaturesWrapper } from "@/shared/lib";
import {
	useArticleCommentsError,
	useArticleCommentsSelector,
	useIsArticleCommentsLoading,
} from "../../model/selectors/commentsSelectors";
import { sendCommentByArticleId } from "../../model/services/sendCommentByArticleId";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId";

interface Props {
	id: string;
}

export const DetailArticlePageComments = memo(function DetailArticlePageComments({ id }: Props): JSX.Element {
	const { t } = useTranslation("articles");
	const dispatch = useAppDispatch();
	const comments = useArticleCommentsSelector();
	const isCommentsLoading = useIsArticleCommentsLoading();
	const error = useArticleCommentsError();

	const handleSubmit = useCallback(
		(commentText: string) => {
			dispatch(sendCommentByArticleId(commentText));
		},
		[dispatch],
	);

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id));
	});

	return (
		<>
			<ToggleFeaturesWrapper
				featureName="isAppRedesigned"
				on={<Text title={t("Комментарии")} className="block-margin" />}
				off={<TextDeprecated title={t("Комментарии")} className="block-margin" />}
			/>

			<AddCommentForm onSubmit={handleSubmit} className="block-margin" />
			<CommentList error={error} isLoading={isCommentsLoading} comments={comments} />
		</>
	);
});
