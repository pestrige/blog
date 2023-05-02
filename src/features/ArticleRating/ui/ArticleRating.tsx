import React, { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { RatingCard } from "@/entities/Rating";
import { useArticleRating, useRateArticle } from "../api/articleRatingApi";
import { useUser } from "@/entities/User";
import { Skeleton } from "@/shared/ui";

export interface ArticleRatingProps {
	articleId: string;
}

const ArticleRating = memo(function ArticleRating({ articleId }: ArticleRatingProps): JSX.Element {
	const { t } = useTranslation("article");
	const { id: userId } = useUser();
	const { data, isLoading, refetch } = useArticleRating({ articleId, userId });
	const [rateArticleMutation, { isLoading: isRateProcessing }] = useRateArticle();

	const handleRating = useCallback(
		async (rating: number, feedback?: string) => {
			try {
				await rateArticleMutation({ articleId, userId, rate: rating, feedback });
				refetch();
			} catch (e) {
				// TODO: handle error
			}
		},
		[articleId, userId, rateArticleMutation, refetch]
	);

	const handleAccept = useCallback(
		async (rating: number, feedback?: string) => {
			await handleRating(rating, feedback);
		},
		[handleRating]
	);

	const handleCancel = useCallback(
		async (rating: number) => {
			await handleRating(rating);
		},
		[handleRating]
	);

	if (isLoading || isRateProcessing) {
		return <Skeleton width="100%" height="108px" />;
	}

	const rating = data?.[0];

	return (
		<RatingCard
			rating={rating?.rate}
			title={t(rating?.rate ? "Ваша оценка статьи" : "Оцените статью")}
			feedbackTitle={t("Оставьте свой отзыв о статье")}
			onAccept={handleAccept}
			onCancel={handleCancel}
		/>
	);
});

export default ArticleRating;
