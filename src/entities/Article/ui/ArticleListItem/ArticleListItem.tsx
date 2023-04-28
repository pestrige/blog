import { HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames, formatDateToISO } from "@/shared/lib";
import { AppLink, Avatar, Card, Button, Text, HStack } from "@/shared/ui";
import { EyeIcon } from "@/shared/assets";
import { RoutePaths } from "@/shared/config";
import { ArticleBlockText } from "../ArticleBlockText/ArticleBlockText";
import { Article, ArticleTextBlock } from "../../model/types/article";
import { ArticleView, ArticleBlockType } from "../../model/constants/article";
import cls from "./ArticleListItem.module.scss";

interface Props {
	article: Article;
	view: ArticleView;
	target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo(({ article, view, target }: Props): JSX.Element => {
	const { t } = useTranslation("articles");
	const { id, title, img, createdAt, type, views, user, blocks } = article;
	const articleDate = formatDateToISO(createdAt);

	const infoBlock = (
		<HStack justify="between" className={cls.infoWrapper}>
			<Text text={type.join(", ")} className={cls.info} />
			<div className={cls.viewsWrapper}>
				<EyeIcon className={cls.eye} />
				<Text text={views.toString()} />
			</div>
		</HStack>
	);

	if (view === ArticleView.LIST) {
		const textBlock = blocks.find((block) => block.type === ArticleBlockType.TEXT) as
			| ArticleTextBlock
			| undefined;

		return (
			<li className={classNames(cls.list)}>
				<Card>
					<div className={cls.header}>
						<Avatar className={cls.avatar} src={user.avatar} size={30} alt={user.username} />
						<Text text={user.username} />
						<time dateTime={articleDate} className={cls.date}>
							<Text text={createdAt} align="right" />
						</time>
					</div>

					<Text title={title} className={cls.title} />
					{infoBlock}
					<img src={img} alt={title} className={cls.image} />

					{!!textBlock && <ArticleBlockText className={cls.text} content={textBlock} />}
					<AppLink to={`${RoutePaths.article}/${id}`} target={target}>
						<Button>{t("Читать далее")}</Button>
					</AppLink>
				</Card>
			</li>
		);
	}

	return (
		<li className={classNames(cls.grid)}>
			<AppLink to={`${RoutePaths.article}/${id}`} noHover target={target}>
				<Card>
					<div className={cls.imageWrapper}>
						<img src={img} alt={title} className={cls.image} />
						<time className={cls.date} dateTime={articleDate}>
							<Text text={createdAt} />
						</time>
					</div>

					<HStack justify="between" className={cls.infoWrapper}>
						<Text text={type.join(", ")} className={cls.info} />
						<div className={cls.viewsWrapper}>
							<EyeIcon className={cls.eye} />
							<Text text={views.toString()} />
						</div>
					</HStack>
					<Text className={cls.title} text={title} />
				</Card>
			</AppLink>
		</li>
	);
});
