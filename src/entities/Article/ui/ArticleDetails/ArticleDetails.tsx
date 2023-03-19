import { memo } from "react";
import { useTranslation } from "react-i18next";
import { ReducersList, useDynamicReducerLoader } from "shared/hooks";
import { Avatar, Text } from "shared/ui";
import { CalendarIcon, EyeIcon } from "shared/assets";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { useArticleDetails } from "../../model/hooks/useArticleDetails";
import {
	useArticleDataSelector,
	useArticleErrorSelector,
	useIsArticleLoadingSelector,
} from "../../model/selectors/articleDetails";
import { ArticleDetailsSkeleton } from "../ArticleDetailsSkeleton/ArticleDetailsSkeleton";
import { ArticleContent } from "../ArticleContent/ArticleContent";
import cls from "./ArticleDetails.module.scss";

const reducersList: ReducersList = { articleDetails: articleDetailsReducer };

interface Props {
	id: string;
}

export const ArticleDetails = memo(({ id }: Props): JSX.Element => {
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
			<div className={cls.articleDetails}>
				<Text align="center" title={t("Статья не найдена")} />
			</div>
		);
	}

	return (
		<div className={cls.articleDetails}>
			<div className={cls.avatar}>
				<Avatar src={article.img} size={200} />
			</div>
			<Text className={cls.title} title={article.title} text={article.subtitle} size="lg" />

			<div className={cls.info}>
				<EyeIcon className={cls.icon} />
				<Text text={article.views.toString()} />
			</div>
			<div className={cls.infoLast}>
				<CalendarIcon className={cls.icon} />
				<Text text={article.createdAt} />
			</div>

			{article.blocks.map((block) => (
				<ArticleContent key={block.id} block={block} />
			))}
		</div>
	);
});
