import { useEffect } from "react";
import { useStore } from "react-redux";
import { StoreWithManager, StoreSchemaKey } from "shared/config";
import { Reducer } from "@reduxjs/toolkit";
import { useAppDispatch } from "shared/hooks";

export type ReducersList = {
	[name in StoreSchemaKey]?: Reducer;
};

export const useDynamicReducerLoader = (reducers: ReducersList, isRemoveAfterUnmount = true) => {
	const store = useStore() as StoreWithManager;
	const dispatch = useAppDispatch();

	useEffect(() => {
		const mountedReducers = store.reducerManager.getReducerMap();
		Object.entries(reducers).forEach(([reducerName, reducer]) => {
			const key = reducerName as StoreSchemaKey;
			const mounted = mountedReducers[key];

			// If reducer has not been mounted, add to store
			if (!mounted) {
				store.reducerManager.add(key, reducer);
				dispatch({ type: `@INIT ${key} reducer` });
			}
		});

		return () => {
			if (isRemoveAfterUnmount) {
				Object.entries(reducers).forEach(([reducerName]) => {
					store.reducerManager.remove(reducerName as StoreSchemaKey);
					dispatch({ type: `@REMOVE ${reducerName} reducer` });
				});
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
