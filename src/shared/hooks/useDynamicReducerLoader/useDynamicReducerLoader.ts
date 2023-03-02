import { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { StoreWithManager, StoreSchemaKey } from "shared/config";
import { Reducer } from "@reduxjs/toolkit";

export type ReducersList = {
	[name in StoreSchemaKey]?: Reducer;
};

type ReducerObjectEntry = [StoreSchemaKey, Reducer];

export const useDynamicReducerLoader = (reducers: ReducersList, isRemoveAfterUnmount = true) => {
	const store = useStore() as StoreWithManager;
	const dispatch = useDispatch();

	useEffect(() => {
		Object.entries(reducers).forEach(([reducerName, reducer]: ReducerObjectEntry) => {
			store.reducerManager.add(reducerName, reducer);
			dispatch({ type: `@INIT ${reducerName} reducer` });
		});

		return () => {
			if (isRemoveAfterUnmount) {
				Object.entries(reducers).forEach(([reducerName]: ReducerObjectEntry) => {
					store.reducerManager.remove(reducerName);
					dispatch({ type: `@REMOVE ${reducerName} reducer` });
				});
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
