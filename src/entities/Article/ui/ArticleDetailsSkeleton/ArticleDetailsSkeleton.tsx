import { memo } from "react";
import { SkeletonDeprecated } from "@/shared/ui";
import cls from "./ArticleDetailsSkeleton.module.scss";

export const ArticleDetailsSkeleton = memo((): JSX.Element => {
	return (
		<div>
			<SkeletonDeprecated className={cls.avatar} width={200} height={200} border="50%" />
			<SkeletonDeprecated className={cls.title} width={300} height={32} />
			<SkeletonDeprecated className={cls.block} width={600} height={24} />
			<SkeletonDeprecated className={cls.block} width="100%" height={200} />
			<SkeletonDeprecated className={cls.block} width="100%" height={200} />
		</div>
	);
});
