import axios from "axios";
import { User, userActions } from "entities/User";
import { loginByUsername } from "features/AuthByUsername/model";
import { TestAsyncThunk } from "shared/lib/tests";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true);

describe("loginByUsername", () => {
	test("should successfully login", async () => {
		const returnedValue: User = { username: "admin", id: "1" };
		mockedAxios.post.mockReturnValue(Promise.resolve({ data: returnedValue }));

		const thunk = new TestAsyncThunk(loginByUsername);
		const result = await thunk.callThunk({ username: "admin", password: "123" });

		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(returnedValue));
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("fulfilled");
		expect(result.payload).toEqual(returnedValue);
	});

	test("should return login error", async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
		const thunk = new TestAsyncThunk(loginByUsername);
		const result = await thunk.callThunk({ username: "admin", password: "" });

		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("rejected");
		expect(result.payload).toBe("Не удалось залогиниться");
	});
});
