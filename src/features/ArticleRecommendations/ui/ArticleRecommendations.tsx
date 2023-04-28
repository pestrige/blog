import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { Text } from "@/shared/ui";
import { ArticleList } from "@/entities/Article";
import { useGetArticleRecommendations } from "../api/articleRecommendationsApi";

const LIMIT_RECOMMENDATIONS = 3;

export const ArticleRecommendations = memo(function ArticleRecommendations(): JSX.Element {
	const { t } = useTranslation("articles");
	const { data: recommendations, isLoading } = useGetArticleRecommendations(LIMIT_RECOMMENDATIONS);

	return (
		<>
			<Text title={t("Рекомендуемые")} className="block-margin" />
			<ArticleList
				articles={recommendations ?? []}
				isLoading={isLoading}
				className="block-margin"
				target="_blank"
			/>
		</>
	);
});
