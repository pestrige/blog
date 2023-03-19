import { TestAsyncThunk } from "shared/lib/tests";
import { Article } from "../../types/article";
import { articleExample } from "../../constants/articleExample";
import { fetchArticleById } from "./fetchArticleById";

describe("fetchArticleById", () => {
	test("should fetch article", async () => {
		const returnedValue: Article = articleExample;

		const thunk = new TestAsyncThunk(fetchArticleById);
		thunk.api.get.mockReturnValue(Promise.resolve({ data: returnedValue }));
		const result = await thunk.callThunk("/articles/1");

		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("fulfilled");
		expect(result.payload).toEqual(returnedValue);
	});

	test("should return article error", async () => {
		const thunk = new TestAsyncThunk(fetchArticleById);
		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk("/articles/1");

		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("rejected");
		expect(result.payload).toBe("error");
	});
});
