import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { LoginSchema } from "features/AuthByUsername";
import { ProfileSchema } from "features/EditProfileCard";
import { AddCommentFormSchema } from "features/AddCommentForm";
import { UserSchema } from "entities/User";
import { ArticleDetailsSchema } from "entities/Article";
import { ArticleDetailsCommentsSchema } from "pages/DetailArticlePage";
import { ArticlesPageSchema } from "pages/ArticlesPage";
import { ScrollSchema } from "widgets/ObservableScrollPage";

export interface StoreSchema {
	user: UserSchema;
	scroll: ScrollSchema;

	// async reducers
	login?: LoginSchema;
	profile?: ProfileSchema;
	articlesPage?: ArticlesPageSchema;
	articleDetails?: ArticleDetailsSchema;
	articleDetailsComments?: ArticleDetailsCommentsSchema;
	addCommentForm?: AddCommentFormSchema;
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
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArgs;
	state: StoreSchema;
}
