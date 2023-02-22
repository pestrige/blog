import { DeepPartial } from "@reduxjs/toolkit";
import { StoreSchema } from "shared/config";
import { getCounterValue } from "./getCounterValue";

describe("getCounterValue", () => {
	test("should return counter value", () => {
		const store: DeepPartial<StoreSchema> = { counter: { value: 10 } };
		expect(getCounterValue(store as StoreSchema)).toEqual(10);
	});
});
