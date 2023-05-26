import { CombinedState, configureStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { userReducer } from "@/entities/User";
import { Api, rtkApi } from "@/shared/api";
import { scrollReducer } from "@/widgets/ObservableScrollPage";
import { StoreSchema } from "./StoreSchema";
import { createReducerManager } from "./reducerManager";

export const createReduxStore = (
	initialState?: StoreSchema,
	asyncReducers?: ReducersMapObject<StoreSchema>,
) => {
	const rootReducer: ReducersMapObject<StoreSchema> = {
		...asyncReducers,
		user: userReducer,
		scroll: scrollReducer,
		[rtkApi.reducerPath]: rtkApi.reducer,
	};

	const reducerManager = createReducerManager(rootReducer);

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StoreSchema>>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: {
						api: Api,
					},
				},
			}).concat(rtkApi.middleware),
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
