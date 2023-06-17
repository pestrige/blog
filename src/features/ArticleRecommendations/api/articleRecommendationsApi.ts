import { rtkApi } from "@/shared/api";
import { Article } from "@/entities/Article";

const recommendationsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getArticleRecommendations: build.query<Article[], number>({
			query: (limit) => ({
				url: "/articles",
				params: {
					_limit: limit,
					_expand: "user",
				},
			}),
		}),
	}),
});

export const { useGetArticleRecommendationsQuery: useGetArticleRecommendations } = recommendationsApi;
