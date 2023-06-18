import React, { memo } from "react";
import { AppImage, Card, Text } from "@/shared/ui";
import { ArticleContent } from "../ArticleContent/ArticleContent";
import { Article } from "../../model/types/article";
import cls from "./ArticleDetails.module.scss";
import { classNames } from "@/shared/lib";

interface Props {
	article: Article;
	className?: string;
}

export const ArticleDetailsRedesigned = memo(function ArticleDetailsRedesigned({
	article,
	className,
}: Props): JSX.Element {
	return (
		<Card className={classNames(cls.articleDetails, className)}>
			<Text text={article.createdAt} />
			<Text
				className={cls.title}
				title={article.title}
				text={article.subtitle}
				size="lg"
				titleTag="h1"
			/>

			<AppImage className={cls.imageRedesigned} src={article.img} alt={article.title} />

			{article.blocks.map((block) => (
				<ArticleContent key={block.id} block={block} />
			))}
		</Card>
	);
});
