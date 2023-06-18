import React, { memo } from "react";
import { Skeleton } from "@/shared/ui";
import { ToggleFeaturesWrapper } from "@/shared/lib";

export const ArticleRatingSkeleton = memo(function ArticleRatingSkeleton(): JSX.Element {
	return (
		<ToggleFeaturesWrapper
			featureName="isAppRedesigned"
			on={<Skeleton width="100%" height="125px" />}
			off={<Skeleton width="100%" height="108px" />}
		/>
	);
});
