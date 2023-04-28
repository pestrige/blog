import { TestAsyncThunk } from "@/shared/lib/tests";
import { Article } from "@/entities/Article";
import { articleExample } from "@/entities/Article/model/constants/articleExample";
import { fetchArticles } from "./fetchArticles";

describe("fetchArticles", () => {
	test("should successfully get articles", async () => {
		const returnedValue: Article[] = [articleExample];

		const thunk = new TestAsyncThunk(fetchArticles);
		thunk.api.get.mockReturnValue(Promise.resolve({ data: returnedValue }));
		const result = await thunk.callThunk({});

		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("fulfilled");
		expect(result.payload).toEqual(returnedValue);
	});

	test("should return fetch error", async () => {
		const thunk = new TestAsyncThunk(fetchArticles);
		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk({});

		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("rejected");
		expect(result.payload).toBe("error");
	});
});
