import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { userReducer } from "entities/User";
import { Api } from "shared/api";
import { NavigateOptions } from "react-router";
import { To } from "history";
import { StoreSchema } from "./StoreSchema";
import { createReducerManager } from "./reducerManager";

export const createReduxStore = (
	initialState?: StoreSchema,
	asyncReducers?: ReducersMapObject<StoreSchema>,
	navigate?: (to: To, options?: NavigateOptions) => void
) => {
	const rootReducer: ReducersMapObject<StoreSchema> = {
		...asyncReducers,
		user: userReducer,
	};

	const reducerManager = createReducerManager(rootReducer);

	const store = configureStore({
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: {
						api: Api,
						navigate,
					},
				},
			}),
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
