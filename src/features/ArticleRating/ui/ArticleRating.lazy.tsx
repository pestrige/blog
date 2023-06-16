import { lazy, Suspense } from "react";
import { SkeletonDeprecated } from "@/shared/ui";
import { ArticleRatingProps } from "./ArticleRating";

const ArticleRatingLazy = lazy(() => import("./ArticleRating"));

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
	return (
		<Suspense fallback={<SkeletonDeprecated width="100%" height="108px" />}>
			<ArticleRatingLazy {...props} />
		</Suspense>
	);
};
