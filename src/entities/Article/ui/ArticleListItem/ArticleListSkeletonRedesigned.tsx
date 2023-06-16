import React, { memo } from "react";
import { Card, HStack, Skeleton, VStack } from "@/shared/ui";
import { ArticleView } from "../../model/constants/article";
import cls from "./ArticleListItem.module.scss";

interface Props {
	view: ArticleView;
}

export const ArticleListSkeletonRedesigned = memo(function ArticleListSkeletonRedesigned({
	view,
}: Props): JSX.Element {
	if (view === ArticleView.LIST) {
		return (
			<Card className={cls.cardList}>
				<HStack gap={8}>
					<Skeleton width={32} height={32} border="50%" />
					<Skeleton width={130} height={24} />
				</HStack>
				<Skeleton width="100%" height={24} />
				<Skeleton width="100%" height={420} />
				<Skeleton width="100%" height={72} />
				<HStack gap={8} justify="between">
					<Skeleton width={84} height={24} />
					<Skeleton width={84} height={24} />
				</HStack>
			</Card>
		);
	}
	return (
		<Card paddings="none" className={cls.cardGrid}>
			<Skeleton width="100%" height={140} />
			<VStack gap={8} className={cls.infoGrid}>
				<Skeleton width="100%" height={114} />
				<HStack gap={8} justify="between" max>
					<Skeleton width={84} height={24} />
					<Skeleton width={84} height={24} />
				</HStack>
				<Skeleton width={120} height={24} />
			</VStack>
		</Card>
	);
});
