import React, { memo } from "react";
import { AvatarDeprecated, TextDeprecated } from "@/shared/ui";
import { CalendarIcon, EyeIconDeprecated } from "@/shared/assets";
import { ArticleContent } from "../ArticleContent/ArticleContent";
import { Article } from "../../model/types/article";
import cls from "./ArticleDetails.module.scss";
import { classNames } from "@/shared/lib";

interface Props {
	article: Article;
	className?: string;
}

export const ArticleDetailsDeprecated = memo(function ArticleDetailsDeprecated({
	article,
	className,
}: Props): JSX.Element {
	return (
		<div className={classNames(cls.articleDetails, className)}>
			<div className={cls.avatar}>
				<AvatarDeprecated src={article.img} alt={article.title} size={200} />
			</div>
			<TextDeprecated
				className={cls.title}
				title={article.title}
				text={article.subtitle}
				size="lg"
				titleTag="h1"
			/>

			<div className={cls.info}>
				<EyeIconDeprecated className={cls.icon} />
				<TextDeprecated text={article.views.toString()} />
			</div>
			<div className={cls.infoLast}>
				<CalendarIcon className={cls.icon} />
				<TextDeprecated text={article.createdAt} />
			</div>

			{article.blocks.map((block) => (
				<ArticleContent key={block.id} block={block} />
			))}
		</div>
	);
});
