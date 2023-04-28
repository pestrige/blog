import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { ArticleDetails } from "@/entities/Article";
import { Text } from "@/shared/ui";
import { ArticleRecommendations } from "@/features/ArticleRecommendations";
import { ReducersList, useDynamicReducerLoader } from "@/shared/hooks";
import { articleDetailsPageReducer } from "../model/slice";
import { DetailArticlePageHeader } from "./DetailArticlePageHeader/DetailArticlePageHeader";
import { DetailArticlePageComments } from "./DetailArticlePageComments/DetailArticlePageComments";

const reducers: ReducersList = {
	articleDetailsPage: articleDetailsPageReducer,
};

const DetailArticlePage = memo((): JSX.Element => {
	const { t } = useTranslation("articles");
	const { id } = useParams<{ id: string }>();
	useDynamicReducerLoader(reducers);

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

			<ArticleRecommendations />
			<DetailArticlePageComments id={id} />
		</main>
	);
});

export default DetailArticlePage;
