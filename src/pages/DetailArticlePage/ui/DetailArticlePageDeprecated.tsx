import React, { memo } from "react";
import { ArticleDetails } from "@/entities/Article";
import { ToggleFeaturesWrapper } from "@/shared/lib";
import { ArticleRating } from "@/features/ArticleRating";
import { ArticleRecommendations } from "@/features/ArticleRecommendations";
import { DetailArticlePageHeader } from "./DetailArticlePageHeader/DetailArticlePageHeader";
import { DetailArticlePageComments } from "./DetailArticlePageComments/DetailArticlePageComments";

export const DetailArticlePageDeprecated = memo(function DetailArticlePageDeprecated({
	id,
}: {
	id: string;
}): JSX.Element {
	return (
		<>
			<DetailArticlePageHeader />
			<ArticleDetails id={id ?? "1"} className="big-margin" />
			<ToggleFeaturesWrapper
				featureName="isArticleRatingEnabled"
				on={<ArticleRating articleId={id ?? ""} />}
				off={null}
			/>
			<ArticleRecommendations />
			<DetailArticlePageComments id={id} />
		</>
	);
});
