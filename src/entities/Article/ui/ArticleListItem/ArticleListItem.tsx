import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { classNames, formatDateToISO } from "shared/lib";
import { Avatar, Card, Button, Text } from "shared/ui";
import { EyeIcon } from "shared/assets";
import { RoutePaths } from "shared/config";
import { ArticleBlockText } from "../ArticleBlockText/ArticleBlockText";
import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from "../../model/types/article";
import cls from "./ArticleListItem.module.scss";

interface Props {
	article: Article;
	view: ArticleView;
}

export const ArticleListItem = memo(({ article, view }: Props): JSX.Element => {
	const { t } = useTranslation("articles");
	const navigate = useNavigate();
	const { id, title, img, createdAt, type, views, user, blocks } = article;
	const articleDate = formatDateToISO(createdAt);

	const handleButtonClick = useCallback(() => {
		navigate(`${RoutePaths.articles}/${id}`);
	}, [id, navigate]);

	const infoBlock = (
		<div className={cls.infoWrapper}>
			<Text text={type.join(", ")} className={cls.info} />
			<div className={cls.viewsWrapper}>
				<EyeIcon className={cls.eye} />
				<Text text={views.toString()} />
			</div>
		</div>
	);

	if (view === ArticleView.LIST) {
		const textBlock = blocks.find((block) => block.type === ArticleBlockType.TEXT) as
			| ArticleTextBlock
			| undefined;

		return (
			<li className={classNames(cls.wrapper, cls.list)}>
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
					<Button onClick={handleButtonClick}>{t("Читать далее")}</Button>
				</Card>
			</li>
		);
	}

	return (
		<li className={classNames(cls.wrapper, cls.grid)} onClick={handleButtonClick}>
			<Card>
				<div className={cls.imageWrapper}>
					<img src={img} alt={title} className={cls.image} />
					<time className={cls.date} dateTime={articleDate}>
						<Text text={createdAt} />
					</time>
				</div>

				<div className={cls.infoWrapper}>
					<Text text={type.join(", ")} className={cls.info} />
					<div className={cls.viewsWrapper}>
						<EyeIcon className={cls.eye} />
						<Text text={views.toString()} />
					</div>
				</div>
				<Text className={cls.title} text={title} />
			</Card>
		</li>
	);
});
