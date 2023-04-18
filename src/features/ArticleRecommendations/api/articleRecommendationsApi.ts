import { rtkApi } from "shared/api";

const recommendationsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getArticleRecommendations: build.query({
			query: (limit: number) => ({
				url: "/articles",
				params: {
					_limit: limit,
				},
			}),
		}),
	}),
});

export const { useGetArticleRecommendationsQuery: useGetArticleRecommendations } = recommendationsApi;
