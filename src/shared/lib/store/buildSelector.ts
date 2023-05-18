import { useSelector } from "react-redux";
import { StoreSchema } from "@/shared/config";

type Selector<T> = (store: StoreSchema) => T;

type Result<T> = [() => T, Selector<T>];

export const buildSelector = <T>(selector: Selector<T>): Result<T> => {
	const useSelectorHook = () => {
		return useSelector(selector);
	};

	return [useSelectorHook, selector];
};
