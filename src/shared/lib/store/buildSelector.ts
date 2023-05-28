import { useSelector } from "react-redux";
import { StoreSchema } from "@/shared/config";

type Selector<T, Args extends any[]> = (store: StoreSchema, ...args: Args) => T;
type Hook<T, Args extends any[]> = (...args: Args) => T;
type Result<T, Args extends any[]> = [Hook<T, Args>, Selector<T, Args>];

export const buildSelector = <T, Args extends any[]>(selector: Selector<T, Args>): Result<T, Args> => {
	const useSelectorHook: Hook<T, Args> = (...args: Args) => {
		return useSelector((store: StoreSchema) => selector(store, ...args));
	};

	return [useSelectorHook, selector];
};
