import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames, formatDateToISO } from "@/shared/lib";
import {
	AppImage,
	AppLinkDeprecated,
	AvatarDeprecated,
	ButtonDeprecated,
	CardDeprecated,
	HStack,
	SkeletonDeprecated,
	TextDeprecated,
} from "@/shared/ui";
import { EyeIconDeprecated } from "@/shared/assets";
import { getRoute } from "@/shared/constants";
import { ArticleTextBlock } from "../../model/types/article";
import { ArticleBlockText } from "../ArticleBlockText/ArticleBlockText";
import { ArticleBlockType, ArticleView } from "../../model/constants/article";
import { ArticleListItemProps } from "./ArticleListItem";
import cls from "./ArticleListItem.module.scss";

export const ArticleListItemDeprecated = memo(function ArticleListItemDeprecated(
	props: ArticleListItemProps,
): JSX.Element {
	const { t } = useTranslation("articles");
	const { article, view, target } = props;
	const { id, title, img, createdAt, type, views, user, blocks } = article;
	const articleDate = formatDateToISO(createdAt);

	const infoBlock = (
		<HStack testId="ArticleDetails.Info" justify="between" className={cls.infoWrapper}>
			<TextDeprecated text={type.join(", ")} className={cls.info} />
			<div className={cls.viewsWrapper}>
				<EyeIconDeprecated className={cls.eye} />
				<TextDeprecated text={views.toString()} />
			</div>
		</HStack>
	);

	if (view === ArticleView.LIST) {
		const textBlock = blocks.find((block) => block.type === ArticleBlockType.TEXT) as
			| ArticleTextBlock
			| undefined;

		return (
			<li className={classNames(cls.list)} data-testid="ArticleListItem">
				<CardDeprecated>
					<div className={cls.header}>
						<AvatarDeprecated
							className={cls.avatar}
							src={user.avatar}
							size={30}
							alt={user.username}
						/>
						<TextDeprecated text={user.username} />
						<time dateTime={articleDate} className={cls.date}>
							<TextDeprecated text={createdAt} align="right" />
						</time>
					</div>

					<TextDeprecated title={title} className={cls.title} />
					{infoBlock}
					<AppImage
						src={img}
						alt={title}
						className={cls.image}
						fallback={<SkeletonDeprecated width="100%" height={200} />}
					/>

					{!!textBlock && <ArticleBlockText className={cls.text} content={textBlock} />}
					<AppLinkDeprecated to={getRoute.article(id)} target={target}>
						<ButtonDeprecated>{t("Читать далее")}</ButtonDeprecated>
					</AppLinkDeprecated>
				</CardDeprecated>
			</li>
		);
	}

	return (
		<li className={classNames(cls.grid)} data-testid="ArticleListItem">
			<AppLinkDeprecated to={getRoute.article(id)} noHover target={target}>
				<CardDeprecated>
					<div className={cls.imageWrapper}>
						<AppImage
							src={img}
							alt={title}
							className={cls.image}
							fallback={<SkeletonDeprecated width="100%" height={200} />}
						/>
						<time className={cls.date} dateTime={articleDate}>
							<TextDeprecated text={createdAt} />
						</time>
					</div>

					<HStack testId="ArticleDetails.Info" justify="between" className={cls.infoWrapper}>
						<TextDeprecated text={type.join(", ")} className={cls.info} />
						<div className={cls.viewsWrapper}>
							<EyeIconDeprecated className={cls.eye} />
							<TextDeprecated text={views.toString()} />
						</div>
					</HStack>
					<TextDeprecated className={cls.title} text={title} />
				</CardDeprecated>
			</AppLinkDeprecated>
		</li>
	);
});
