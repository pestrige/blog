import { User, userActions } from "@/entities/User";
import { TestAsyncThunk } from "@/shared/lib/tests";
import { loginByUsername } from "./loginByUsername";

describe("loginByUsername", () => {
	test("should successfully login", async () => {
		const returnedValue: User = {
			username: "admin",
			id: "1",
			avatar: "https://i.pravatar.cc/150?img=13",
		};

		const thunk = new TestAsyncThunk(loginByUsername);
		thunk.api.post.mockReturnValue(Promise.resolve({ data: returnedValue }));
		const result = await thunk.callThunk({ username: "admin", password: "123" });

		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(returnedValue));
		expect(thunk.api.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("fulfilled");
		expect(result.payload).toEqual(returnedValue);
	});

	test("should return login error", async () => {
		const thunk = new TestAsyncThunk(loginByUsername);
		thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk({ username: "admin", password: "" });

		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(thunk.api.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("rejected");
		expect(result.payload).toBe("Не удалось залогиниться");
	});
});
