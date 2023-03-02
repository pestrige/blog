import { AnyAction, combineReducers, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { ReducerManager, StoreSchema, StoreSchemaKey } from "./StoreSchema";

export function createReducerManager(initialReducers: ReducersMapObject<StoreSchema>): ReducerManager {
	const reducers = { ...initialReducers };

	let combinedReducer = combineReducers(reducers);

	let keysToRemove: StoreSchemaKey[] = [];

	return {
		getReducerMap: () => reducers,

		reduce: (state: StoreSchema, action: AnyAction) => {
			if (keysToRemove.length > 0) {
				state = { ...state };
				keysToRemove.forEach((key) => {
					delete state[key];
				});
				keysToRemove = [];
			}

			return combinedReducer(state, action);
		},

		add: (key: StoreSchemaKey, reducer: Reducer) => {
			if (!key || reducers[key]) {
				return;
			}

			reducers[key] = reducer;

			combinedReducer = combineReducers(reducers);
		},

		remove: (key: StoreSchemaKey) => {
			if (!key || !reducers[key]) {
				return;
			}

			delete reducers[key];

			keysToRemove.push(key);

			combinedReducer = combineReducers(reducers);
		},
	};
}
