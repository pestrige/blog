import { DeepPartial } from "@reduxjs/toolkit";
import { StoreSchema } from "shared/config";
import { getCounter } from "./getCounter";

describe("getCounter", () => {
	test("should return counter state", () => {
		const state: DeepPartial<StoreSchema> = { counter: { value: 10 } };
		expect(getCounter(state as StoreSchema)).toEqual({ value: 10 });
	});
});
