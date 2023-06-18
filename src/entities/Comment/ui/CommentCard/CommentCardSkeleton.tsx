import React from "react";
import { classNames, toggleFeatures } from "@/shared/lib";
import { Skeleton } from "@/shared/ui";
import cls from "./CommentCard.module.scss";

interface Props {
	className?: string;
}

export const CommentCardSkeleton = ({ className }: Props): JSX.Element => {
	const cardCls = toggleFeatures({
		name: "isAppRedesigned",
		on: () => cls.commentCardRedesigned,
		off: () => cls.commentCard,
	});
	return (
		<>
			<li className={classNames(cardCls, className)}>
				<div className={cls.header}>
					<Skeleton className={cls.avatar} width="30px" height="30px" border="50%" />
					<Skeleton width="100px" height="24px" />
				</div>
				<Skeleton width="100%" height="24px" />
			</li>
			<li className={classNames(cardCls, className)}>
				<div className={cls.header}>
					<Skeleton className={cls.avatar} width="30px" height="30px" border="50%" />
					<Skeleton width="100px" height="24px" />
				</div>
				<Skeleton width="100%" height="24px" />
			</li>
		</>
	);
};
