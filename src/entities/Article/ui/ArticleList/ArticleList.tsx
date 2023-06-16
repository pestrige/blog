import { HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";
import { Text, TextDeprecated } from "@/shared/ui";
import { ToggleFeaturesWrapper } from "@/shared/lib";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { Article } from "../../model/types/article";
import { ArticleView } from "../../model/constants/article";
import { ArticleListSkeletonDeprecated } from "../ArticleListItem/ArticleListSkeletonDeprecated";
import { ArticleListSkeletonRedesigned } from "../ArticleListItem/ArticleListSkeletonRedesigned";
import cls from "./ArticleList.module.scss";

const getSkeleton = (view: ArticleView) => {
	return (
		<>
			{new Array(view === ArticleView.GRID ? 9 : 4).fill(0).map((_, index) => (
				<ToggleFeaturesWrapper
					featureName="isAppRedesigned"
					on={<ArticleListSkeletonRedesigned key={index} view={view} />}
					off={<ArticleListSkeletonDeprecated key={index} view={view} />}
				/>
			))}
		</>
	);
};

interface Props {
	articles: Article[];
	className?: string;
	isLoading?: boolean;
	view?: ArticleView;
	target?: HTMLAttributeAnchorTarget;
	testId?: string;
}

export const ArticleList = memo(
	({
		articles,
		className = "",
		isLoading = false,
		view = ArticleView.GRID,
		target,
		testId,
	}: Props): JSX.Element => {
		const { t } = useTranslation("articles");

		if (!isLoading && articles.length === 0)
			return (
				<div className={className}>
					<ToggleFeaturesWrapper
						featureName="isAppRedesigned"
						on={<Text title={t("Статьи не найдены")} />}
						off={<TextDeprecated title={t("Статьи не найдены")} />}
					/>
				</div>
			);

		return (
			<div className={className} data-testid={testId ?? "ArticleList"}>
				<ul className={cls[view]}>
					{articles.length > 0 &&
						articles.map((article) => (
							<ArticleListItem key={article.id} article={article} view={view} target={target} />
						))}

					{isLoading && getSkeleton(view)}
				</ul>
			</div>
		);
	},
);
