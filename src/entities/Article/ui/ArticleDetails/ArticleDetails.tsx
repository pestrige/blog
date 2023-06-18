import { memo } from "react";
import { useTranslation } from "react-i18next";
import { ReducersList, useDynamicReducerLoader } from "@/shared/hooks";
import { Text, TextDeprecated } from "@/shared/ui";
import { classNames, ToggleFeaturesWrapper } from "@/shared/lib";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { useArticleDetails } from "../../model/hooks/useArticleDetails";
import {
	useArticleDataSelector,
	useArticleErrorSelector,
	useIsArticleLoadingSelector,
} from "../../model/selectors/articleDetails";
import { ArticleDetailsSkeleton } from "../ArticleDetailsSkeleton/ArticleDetailsSkeleton";
import { ArticleDetailsDeprecated } from "./ArticleDetailsDeprecated";
import { ArticleDetailsRedesigned } from "./ArticleDetailsRedesigned";
import cls from "./ArticleDetails.module.scss";

const reducersList: ReducersList = { articleDetails: articleDetailsReducer };

interface Props {
	className?: string;
	id: string;
}

export const ArticleDetails = memo(({ id, className }: Props): JSX.Element => {
	const article = useArticleDataSelector();
	const isArticleLoading = useIsArticleLoadingSelector();
	const articleError = useArticleErrorSelector();
	const { t } = useTranslation("articles");

	useDynamicReducerLoader(reducersList);
	useArticleDetails(id);

	if (isArticleLoading) {
		return <ArticleDetailsSkeleton />;
	}

	if (articleError || !article) {
		return (
			<div className={classNames(cls.articleDetails, className)}>
				<ToggleFeaturesWrapper
					featureName="isAppRedesigned"
					on={<Text align="center" title={t("Статья не найдена")} />}
					off={<TextDeprecated align="center" title={t("Статья не найдена")} />}
				/>
			</div>
		);
	}

	return (
		<ToggleFeaturesWrapper
			featureName="isAppRedesigned"
			on={<ArticleDetailsRedesigned article={article} className={className} />}
			off={<ArticleDetailsDeprecated article={article} className={className} />}
		/>
	);
});
