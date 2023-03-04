import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { LoginSchema } from "features";
import { UserSchema } from "entities/User";
import { ProfileSchema } from "entities/Profile";

export interface StoreSchema {
	user: UserSchema;

	// async reducers
	login?: LoginSchema;
	profile?: ProfileSchema;
}

export type StoreSchemaKey = keyof StoreSchema;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StoreSchema>;
	reduce: (state: StoreSchema, action: AnyAction) => CombinedState<StoreSchema>;
	add: (key: StoreSchemaKey, reducer: Reducer) => void;
	remove: (key: StoreSchemaKey) => void;
}

export interface StoreWithManager extends EnhancedStore<StoreSchema> {
	reducerManager: ReducerManager;
}
