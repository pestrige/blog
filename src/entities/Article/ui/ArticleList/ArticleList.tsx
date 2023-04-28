import { HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";
import { Text } from "@/shared/ui";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListITemSkeleton";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { Article } from "../../model/types/article";
import { ArticleView } from "../../model/constants/article";
import cls from "./ArticleList.module.scss";

const getSkeleton = (view: ArticleView) => {
	return (
		<>
			{new Array(view === ArticleView.GRID ? 9 : 3).fill(0).map((_, index) => (
				<ArticleListItemSkeleton key={index} view={view} />
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
}

export const ArticleList = memo(
	({
		articles,
		className = "",
		isLoading = false,
		view = ArticleView.GRID,
		target,
	}: Props): JSX.Element => {
		const { t } = useTranslation("articles");

		if (!isLoading && articles.length === 0)
			return (
				<div className={className}>
					<Text title={t("Статьи не найдены")} />
				</div>
			);

		return (
			<div className={className}>
				<ul className={cls[view]}>
					{articles.length > 0 &&
						articles.map((article) => (
							<ArticleListItem key={article.id} article={article} view={view} target={target} />
						))}

					{isLoading && getSkeleton(view)}
				</ul>
			</div>
		);
	}
);
