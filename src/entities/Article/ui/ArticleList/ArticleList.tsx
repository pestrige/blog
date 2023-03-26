import { memo } from "react";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListITemSkeleton";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { Article, ArticleView } from "../../model/types/article";
import cls from "./ArticleList.module.scss";

const getSkeleton = (view: ArticleView) => {
	return (
		<div className={cls[view]}>
			{new Array(view === ArticleView.GRID ? 9 : 3).fill(0).map((_, index) => (
				<ArticleListItemSkeleton key={index} view={view} />
			))}
		</div>
	);
};

interface Props {
	articles: Article[];
	className?: string;
	isLoading?: boolean;
	view?: ArticleView;
}

export const ArticleList = memo(
	({ articles, className = "", isLoading = false, view = ArticleView.GRID }: Props): JSX.Element => {
		if (isLoading) {
			return getSkeleton(view);
		}

		return (
			<div className={className}>
				{articles.length > 0 && (
					<ul className={cls[view]}>
						{articles.map((article) => (
							<ArticleListItem key={article.id} article={article} view={view} />
						))}
					</ul>
				)}
			</div>
		);
	}
);
