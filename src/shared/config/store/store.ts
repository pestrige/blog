import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { userReducer } from "entities/User";
import { loginReducer } from "features";
import { StoreSchema } from "./StoreSchema";

export const createReduxStore = (initialState?: StoreSchema) => {
	const rootReducer: ReducersMapObject<StoreSchema> = {
		user: userReducer,
		login: loginReducer,
	};

	return configureStore<StoreSchema>({
		reducer: rootReducer,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
};
