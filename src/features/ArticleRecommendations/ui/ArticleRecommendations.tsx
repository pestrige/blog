import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { ArticleList } from "@/entities/Article";
import { Text, TextDeprecated } from "@/shared/ui";
import { ToggleFeaturesWrapper } from "@/shared/lib";
import { useGetArticleRecommendations } from "../api/articleRecommendationsApi";

const LIMIT_RECOMMENDATIONS = 3;

export const ArticleRecommendations = memo(function ArticleRecommendations(): JSX.Element {
	const { t } = useTranslation("articles");
	const { data: recommendations, isLoading } = useGetArticleRecommendations(LIMIT_RECOMMENDATIONS);

	return (
		<>
			<ToggleFeaturesWrapper
				featureName="isAppRedesigned"
				on={<Text title={t("Рекомендуемые")} className="block-margin" />}
				off={<TextDeprecated title={t("Рекомендуемые")} className="block-margin" />}
			/>
			<ArticleList
				articles={recommendations ?? []}
				isLoading={isLoading}
				className="block-margin"
				target="_blank"
				testId="ArticleRecommendations"
			/>
		</>
	);
});
