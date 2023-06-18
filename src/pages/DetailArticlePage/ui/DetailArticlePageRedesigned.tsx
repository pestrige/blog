import React, { memo } from "react";
import { ArticleDetails } from "@/entities/Article";
import { ToggleFeaturesWrapper } from "@/shared/lib";
import { ArticleRating } from "@/features/ArticleRating";
import { ArticleRecommendations } from "@/features/ArticleRecommendations";
import { DetailArticlePageHeader } from "./DetailArticlePageHeader/DetailArticlePageHeader";
import { DetailArticlePageComments } from "./DetailArticlePageComments/DetailArticlePageComments";
import { StickyContentLayout } from "@/shared/layouts";

export const DetailArticlePageRedesigned = memo(function DetailArticlePageRedesigned({
	id,
}: {
	id: string;
}): JSX.Element {
	return (
		<StickyContentLayout
			right={<DetailArticlePageHeader />}
			content={
				<div>
					<ArticleDetails id={id ?? "1"} className="big-margin" />
					<ToggleFeaturesWrapper
						featureName="isArticleRatingEnabled"
						on={<ArticleRating articleId={id ?? ""} className="big-margin" />}
						off={null}
					/>
					<ArticleRecommendations />
					<DetailArticlePageComments id={id} />
				</div>
			}
		/>
	);
});
