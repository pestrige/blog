import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { Text, TextDeprecated } from "@/shared/ui";
import { ReducersList, useDynamicReducerLoader, useInitialEffect, usePageClassName } from "@/shared/hooks";
import { ToggleFeaturesWrapper } from "@/shared/lib";
import { articleDetailsPageReducer } from "../model/slice";
import { DetailArticlePageDeprecated } from "./DetailArticlePageDeprecated";
import { DetailArticlePageRedesigned } from "./DetailArticlePageRedesigned";

const reducers: ReducersList = {
	articleDetailsPage: articleDetailsPageReducer,
};

const DetailArticlePage = memo((): JSX.Element => {
	const { t } = useTranslation("articles");
	const { id } = useParams<{ id: string }>();
	const pageClassName = usePageClassName();

	useDynamicReducerLoader(reducers);

	useInitialEffect(() => {
		window.scrollTo(0, 0);
	});

	if (!id) {
		return (
			<main className={pageClassName}>
				<ToggleFeaturesWrapper
					featureName="isAppRedesigned"
					on={<Text title={t("Статья не найдена")} />}
					off={<TextDeprecated title={t("Статья не найдена")} />}
				/>
			</main>
		);
	}

	return (
		<main className={pageClassName}>
			<ToggleFeaturesWrapper
				featureName="isAppRedesigned"
				on={<DetailArticlePageRedesigned id={id} />}
				off={<DetailArticlePageDeprecated id={id} />}
			/>
		</main>
	);
});

export default DetailArticlePage;
