import { StoreSchema } from "shared/config";
import {
	getArticlesHasMore,
	getArticlesIsLoading,
	getArticlesLimit,
	getArticlesPage,
} from "./articlesPageSelectors";

describe("articlesPageSelectors", () => {
	test("should return loading status", () => {
		const store: DeepPartial<StoreSchema> = { articlesPage: { isLoading: true } };
		expect(getArticlesIsLoading(store as StoreSchema)).toBe(true);
	});

	test("should return current page", () => {
		const store: DeepPartial<StoreSchema> = { articlesPage: { page: 1 } };
		expect(getArticlesPage(store as StoreSchema)).toBe(1);
	});

	test("should return hasMore", () => {
		const store: DeepPartial<StoreSchema> = { articlesPage: { hasMore: false } };
		expect(getArticlesHasMore(store as StoreSchema)).toBe(false);
	});

	test("should return page limit", () => {
		const store: DeepPartial<StoreSchema> = { articlesPage: { limit: 9 } };
		expect(getArticlesLimit(store as StoreSchema)).toBe(9);
	});
});
