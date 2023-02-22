import { createSelector } from "@reduxjs/toolkit";
import { CounterSchema } from "shared/config";
import { useSelector } from "react-redux";
import { getCounter } from "../getCounter/getCounter";

export const getCounterValue = createSelector(getCounter, (counter: CounterSchema) => counter.value);
export const useCounterSelector = () => {
	return useSelector(getCounterValue);
};
