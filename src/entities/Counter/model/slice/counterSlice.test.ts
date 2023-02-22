import { CounterSchema } from "shared/config";
import { counterReducer, counterActions } from "./counterSlice";

describe("counterSlice", () => {
	test("should return incremented state", () => {
		const counterStore: CounterSchema = { value: 10 };
		expect(counterReducer(counterStore, counterActions.increment)).toEqual({ value: 11 });
	});
	test("should return decremented state", () => {
		const counterStore: CounterSchema = { value: 10 };
		expect(counterReducer(counterStore, counterActions.decrement)).toEqual({ value: 9 });
	});
	test("should work with empty state", () => {
		expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
	});
});
