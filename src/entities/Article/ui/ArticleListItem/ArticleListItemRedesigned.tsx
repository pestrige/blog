import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import {
	AppImage,
	AppLink,
	Avatar,
	Button,
	Card,
	HStack,
	Skeleton,
	Text,
	ViewsCount,
	VStack,
} from "@/shared/ui";
import { formatDateToISO } from "@/shared/lib";
import { getRoute } from "@/shared/constants";
import { ArticleBlockType, ArticleView } from "../../model/constants/article";
import { ArticleTextBlock } from "../../model/types/article";
import { ArticleListItemProps } from "./ArticleListItem";
import cls from "./ArticleListItem.module.scss";

export const ArticleListItemRedesigned = memo(function ArticleListItemRedesigned(
	props: ArticleListItemProps,
): JSX.Element {
	const { t } = useTranslation("articles");
	const { article, view, target } = props;
	const { id, title, img, createdAt, type, views, user, blocks } = article;
	const articleDate = formatDateToISO(createdAt);
	const textBlock = (
		blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock | undefined
	)?.paragraphs
		?.slice(0, 2)
		?.join(" ");

	if (view === ArticleView.LIST) {
		return (
			<Card as="li" className={cls.cardList}>
				<HStack gap={8}>
					<Avatar size={32} src={user?.avatar} />
					<Text text={user?.username} bold />
					<Text text={createdAt} />
				</HStack>

				<Text title={title} />
				<AppImage
					src={img}
					alt={title}
					className={cls.imageRedesigned}
					fallback={<Skeleton width="100%" height={420} />}
				/>

				{!!textBlock && <Text className={cls.textBlockRedesigned} text={textBlock} />}

				<HStack justify="between" gap={8}>
					<AppLink to={getRoute.article(id)} target={target}>
						<Button variant="rounded-outline">{t("Читать далее")}</Button>
					</AppLink>
					<ViewsCount views={views} />
				</HStack>
			</Card>
		);
	}

	return (
		<Card as="li" paddings="none" className={cls.cardGrid}>
			<AppLink to={getRoute.article(id)} noHover target={target} className={cls.linkGrid}>
				<AppImage
					src={img}
					alt={title}
					className={cls.imageGrid}
					fallback={<Skeleton width="100%" height={140} />}
				/>

				<VStack gap={8} className={cls.infoGrid}>
					{!!textBlock && <Text className={cls.textBlockGrid} text={textBlock} />}
					<HStack gap={8} justify="between" max>
						<Text text={createdAt} />
						<ViewsCount views={views} />
					</HStack>
					<HStack>
						<Avatar size={32} src={user?.avatar} />
						<Text text={user?.username} bold />
					</HStack>
				</VStack>
			</AppLink>
		</Card>
	);
});
