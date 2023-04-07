import { ArticleDetailsCommentsSchema } from "./ArticleDetailsCommentsSchema";
import { ArticleDetailsRecommendSchema } from "./ArticleDetailsRecommendSchema";

export interface ArticleDetailsPageSchema {
	comments: ArticleDetailsCommentsSchema;
	recommendations: ArticleDetailsRecommendSchema;
}
