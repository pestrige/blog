import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { CardDeprecated, Skeleton } from "@/shared/ui";
import { ArticleView } from "../../model/constants/article";
import cls from "./ArticleListItem.module.scss";

interface Props {
	className?: string;
	view: ArticleView;
}

export const ArticleListSkeletonDeprecated = memo((props: Props) => {
	const { className, view } = props;

	if (view === ArticleView.LIST) {
		return (
			<li className={classNames(cls.wrapper, cls.list, className)}>
				<CardDeprecated className={cls.card}>
					<div className={cls.header}>
						<Skeleton border="50%" height={30} width={30} />
						<Skeleton width={150} height={16} />
					</div>
					<Skeleton width={300} height={24} className={cls.title} />
					<Skeleton width={250} height={24} className={cls.infoWrapper} />
					<Skeleton height={200} className={cls.img} />
					<Skeleton height={36} width={200} />
				</CardDeprecated>
			</li>
		);
	}

	return (
		<div className={classNames(cls.wrapper, cls.grid, className)}>
			<CardDeprecated className={cls.card}>
				<div className={cls.imageWrapper}>
					<Skeleton width={200} height={200} className={cls.img} />
				</div>
				<div className={cls.infoWrapper}>
					<Skeleton width={130} height={16} />
				</div>
				<Skeleton width={150} height={16} className={cls.title} />
			</CardDeprecated>
		</div>
	);
});
