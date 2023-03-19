import { StoreSchema } from "shared/config";
import { articleExample } from "../constants/articleExample";
import { getArticleData, getArticleError, getIsArticleLoading } from "./articleDetails";

describe("articleDetails", () => {
	test("should return article data", () => {
		const store: DeepPartial<StoreSchema> = {
			articleDetails: { data: articleExample },
		};

		expect(getArticleData(store as StoreSchema)).toEqual(articleExample);
	});

	test("should work with empty store", () => {
		const store: DeepPartial<StoreSchema> = {
			articleDetails: {},
		};

		expect(getArticleData(store as StoreSchema)).toBe(undefined);
	});

	test("should return article loading status", () => {
		const store: DeepPartial<StoreSchema> = {
			articleDetails: { isLoading: false },
		};

		expect(getIsArticleLoading(store as StoreSchema)).toBe(false);
	});

	test("should return true loading status with empty store", () => {
		const store: DeepPartial<StoreSchema> = {
			articleDetails: {},
		};

		expect(getIsArticleLoading(store as StoreSchema)).toBe(true);
	});

	test("should return article error", () => {
		const store: DeepPartial<StoreSchema> = {
			articleDetails: { error: "error" },
		};

		expect(getArticleError(store as StoreSchema)).toBe("error");
	});

	test("should return article error with empty store", () => {
		const store: DeepPartial<StoreSchema> = {
			articleDetails: {},
		};

		expect(getArticleError(store as StoreSchema)).toBe("");
	});
});
