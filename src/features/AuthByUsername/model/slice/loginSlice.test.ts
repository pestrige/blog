import { LoginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe("loginSlice", () => {
	test("should set username", () => {
		const state: DeepPartial<LoginSchema> = { username: "admin" };

		expect(loginReducer(state as LoginSchema, loginActions.setUsername("admin111"))).toEqual({
			username: "admin111",
			error: "",
		});
	});

	test("should set username and reset error", () => {
		const state: DeepPartial<LoginSchema> = { username: "admin", error: "error" };

		expect(loginReducer(state as LoginSchema, loginActions.setUsername("admin123"))).toEqual({
			username: "admin123",
			error: "",
		});
	});

	test("should set password", () => {
		const state: DeepPartial<LoginSchema> = { password: "123" };

		expect(loginReducer(state as LoginSchema, loginActions.setPassword("12345"))).toEqual({
			password: "12345",
			error: "",
		});
	});

	test("should set password and reset error", () => {
		const state: DeepPartial<LoginSchema> = { password: "123", error: "error" };

		expect(loginReducer(state as LoginSchema, loginActions.setPassword("12345"))).toEqual({
			password: "12345",
			error: "",
		});
	});
});
