import { StoreSchema } from "shared/config";
import { getArticlesIsLoading } from "./articlesPageSelectors";

describe("articlesPageSelectors", () => {
	test("should return loading status", () => {
		const store: DeepPartial<StoreSchema> = { articlesPage: { isLoading: true } };

		expect(getArticlesIsLoading(store as StoreSchema)).toBe(true);
	});
});
