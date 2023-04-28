import { TestAsyncThunk } from "@/shared/lib/tests";
import { initializeArticles } from "./initializeArticles";
import { fetchArticles } from "../fetchArticles/fetchArticles";

jest.mock("../fetchArticles/fetchArticles");

describe("initializeArticles", () => {
	test("should have been successfully called", async () => {
		const thunk = new TestAsyncThunk(initializeArticles, {
			articlesPage: {
				page: 1,
				ids: [],
				entities: {},
				hasMore: true,
				isLoading: false,
				limit: 4,
				_initialized: false,
			},
		});
		const searchParams = new URLSearchParams();
		await thunk.callThunk(searchParams);

		expect(thunk.dispatch).toBeCalledTimes(4);
		expect(fetchArticles).toHaveBeenCalled();
	});

	test("should not have been called if already initialized", async () => {
		const thunk = new TestAsyncThunk(initializeArticles, {
			articlesPage: {
				page: 1,
				ids: [],
				entities: {},
				hasMore: true,
				isLoading: false,
				limit: 4,
				_initialized: true,
			},
		});
		const searchParams = new URLSearchParams();
		await thunk.callThunk(searchParams);

		expect(thunk.dispatch).toBeCalledTimes(2);
		expect(fetchArticles).not.toHaveBeenCalled();
	});
});
