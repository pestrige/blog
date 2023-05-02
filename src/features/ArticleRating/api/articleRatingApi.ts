import { rtkApi } from "@/shared/api";
import { Rating } from "@/entities/Rating";

interface GetArticleRatingParams {
	userId?: string;
	articleId: string;
}

interface RateArticleParams extends GetArticleRatingParams {
	rate: number;
	feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getArticleRating: build.query<Rating[], GetArticleRatingParams>({
			query: ({ articleId, userId }) => ({
				url: "/article-ratings",
				params: {
					userId,
					articleId,
				},
			}),
		}),
		rateArticle: build.mutation<void, RateArticleParams>({
			query: (args) => ({
				url: "/article-ratings",
				method: "POST",
				body: args,
			}),
		}),
	}),
});

export const { useGetArticleRatingQuery: useArticleRating, useRateArticleMutation: useRateArticle } =
	articleRatingApi;
