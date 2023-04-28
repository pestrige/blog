import { TestAsyncThunk } from "@/shared/lib/tests";
import { fetchNextArticles } from "./fetchNextArticles";
import { fetchArticles } from "../fetchArticles/fetchArticles";

jest.mock("../fetchArticles/fetchArticles");

describe("fetchNextArticles", () => {
	test("should have been successfully called", async () => {
		const thunk = new TestAsyncThunk(fetchNextArticles, {
			articlesPage: { page: 1, ids: [], entities: {}, hasMore: true, isLoading: false, limit: 4 },
		});
		await thunk.callThunk();

		expect(thunk.dispatch).toBeCalledTimes(4);
		expect(fetchArticles).toHaveBeenCalled();
	});

	test("should not have been called while loading", async () => {
		const thunk = new TestAsyncThunk(fetchNextArticles, {
			articlesPage: { page: 1, ids: [], entities: {}, hasMore: true, isLoading: true, limit: 4 },
		});
		await thunk.callThunk();

		expect(thunk.dispatch).toBeCalledTimes(2);
		expect(fetchArticles).not.toHaveBeenCalled();
	});

	test("should not have been called while hasMore === false", async () => {
		const thunk = new TestAsyncThunk(fetchNextArticles, {
			articlesPage: { page: 1, ids: [], entities: {}, hasMore: false, isLoading: false, limit: 4 },
		});
		await thunk.callThunk();

		expect(thunk.dispatch).toBeCalledTimes(2);
		expect(fetchArticles).not.toHaveBeenCalled();
	});
});
