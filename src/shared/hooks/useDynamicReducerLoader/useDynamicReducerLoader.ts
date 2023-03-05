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
		Object.entries(reducers).forEach(([reducerName, reducer]) => {
			store.reducerManager.add(reducerName as StoreSchemaKey, reducer);
			dispatch({ type: `@INIT ${reducerName} reducer` });
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
