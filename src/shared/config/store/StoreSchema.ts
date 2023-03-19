import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { To } from "history";
import { NavigateOptions } from "react-router";
import { LoginSchema } from "features/AuthByUsername";
import { ProfileSchema } from "features/EditProfileCard";
import { UserSchema } from "entities/User";
import { ArticleDetailsSchema } from "entities/Article";

export interface StoreSchema {
	user: UserSchema;

	// async reducers
	login?: LoginSchema;
	profile?: ProfileSchema;
	articleDetails?: ArticleDetailsSchema;
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

export interface ThunkExtraArgs {
	api: AxiosInstance;
	navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArgs;
	state: StoreSchema;
}
