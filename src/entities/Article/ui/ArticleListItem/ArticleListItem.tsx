import { HTMLAttributeAnchorTarget, memo } from "react";
import { ToggleFeaturesWrapper } from "@/shared/lib";
import { Article } from "../../model/types/article";
import { ArticleView } from "../../model/constants/article";
import { ArticleListItemDeprecated } from "./ArticleListItemDeprecated";
import { ArticleListItemRedesigned } from "./ArticleListItemRedesigned";

export interface ArticleListItemProps {
	article: Article;
	view: ArticleView;
	target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps): JSX.Element => {
	return (
		<ToggleFeaturesWrapper
			featureName="isAppRedesigned"
			on={<ArticleListItemRedesigned {...props} />}
			off={<ArticleListItemDeprecated {...props} />}
		/>
	);
});
