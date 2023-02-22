import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";
import { StoreSchema } from "./StoreSchema";

const rootReducer = {
	counter: counterReducer,
};

export const createReduxStore = (initialState?: StoreSchema) => {
	return configureStore<StoreSchema>({
		reducer: rootReducer,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
};
