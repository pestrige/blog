import { lazy, Suspense } from "react";
import { ArticleRatingProps } from "./ArticleRating";
import { ArticleRatingSkeleton } from "./ArticleRatingSkeleton";

const ArticleRatingLazy = lazy(() => import("./ArticleRating"));

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
	return (
		<Suspense fallback={<ArticleRatingSkeleton />}>
			<ArticleRatingLazy {...props} />
		</Suspense>
	);
};
