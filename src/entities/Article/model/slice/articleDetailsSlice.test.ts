import { ArticleDetailsSchema } from "../types/articleDetailsSchema";
import { articleDetailsReducer } from "./articleDetailsSlice";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";
import { articleExample } from "../constants/articleExample";

describe("articleDetailsSlice", () => {
	test("should return fulfilled status and data", () => {
		const state: DeepPartial<ArticleDetailsSchema> = {
			isLoading: true,
		};

		expect(
			articleDetailsReducer(
				state as ArticleDetailsSchema,
				fetchArticleById.fulfilled(articleExample, "/articles/1", ""),
			),
		).toEqual({
			isLoading: false,
			data: articleExample,
		});
	});
});
