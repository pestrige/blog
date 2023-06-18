import { memo } from "react";
import { Card, Skeleton } from "@/shared/ui";
import { ToggleFeaturesWrapper } from "@/shared/lib";
import cls from "./ArticleDetailsSkeleton.module.scss";

export const ArticleDetailsSkeleton = memo((): JSX.Element => {
	return (
		<ToggleFeaturesWrapper
			featureName="isAppRedesigned"
			on={
				<Card>
					<Skeleton className={cls.blockRedesigned} width="20%" height={24} />
					<Skeleton className={cls.blockRedesigned} width="100%" height={76} />
					<Skeleton className={cls.blockRedesigned} width="50%" height={28} />
					<Skeleton className={cls.blockRedesigned} width="100%" height={420} />
					<Skeleton className={cls.blockRedesigned} width="100%" height={370} />
				</Card>
			}
			off={
				<div>
					<Skeleton className={cls.avatar} width={200} height={200} border="50%" />
					<Skeleton className={cls.title} width={300} height={32} />
					<Skeleton className={cls.block} width={600} height={24} />
					<Skeleton className={cls.block} width="100%" height={200} />
					<Skeleton className={cls.block} width="100%" height={200} />
				</div>
			}
		/>
	);
});
