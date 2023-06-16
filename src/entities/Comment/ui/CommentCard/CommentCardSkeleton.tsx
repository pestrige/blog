import React from "react";
import { classNames } from "@/shared/lib";
import { SkeletonDeprecated } from "@/shared/ui";
import cls from "./CommentCard.module.scss";

interface Props {
	className?: string;
}

export const CommentCardSkeleton = ({ className }: Props): JSX.Element => {
	return (
		<>
			<li className={classNames(cls.commentCard, className)}>
				<div className={cls.header}>
					<SkeletonDeprecated className={cls.avatar} width="30px" height="30px" border="50%" />
					<SkeletonDeprecated width="100px" height="24px" />
				</div>
				<SkeletonDeprecated width="100%" height="24px" />
			</li>
			<li className={classNames(cls.commentCard, className)}>
				<div className={cls.header}>
					<SkeletonDeprecated className={cls.avatar} width="30px" height="30px" border="50%" />
					<SkeletonDeprecated width="100px" height="24px" />
				</div>
				<SkeletonDeprecated width="100%" height="24px" />
			</li>
		</>
	);
};
