import { Story } from "@storybook/react";
import { StoreSchema } from "@/shared/config";
import { StoreProvider } from "@/app/providers";
import { ReducersList } from "@/shared/hooks";
// TODO: add public API for storybook data
/* eslint-disable fsd-path-checker/public-api-imports */
import { loginReducer } from "@/features/AuthByUsername/model";
import { profileReducer } from "@/features/EditProfileCard/model";
import { articleDetailsReducer } from "@/entities/Article/model/slice/articleDetailsSlice";
import { addCommentReducer } from "@/features/AddCommentForm/model/slice/addCommentSlice";
import { articlesPageReducer } from "@/pages/ArticlesPage/model/slice/articlesPageSlice";
/* eslint-enable fsd-path-checker/public-api-imports */
import { articleDetailsPageReducer } from "@/pages/DetailArticlePage";

const asyncReducers: ReducersList = {
	login: loginReducer,
	profile: profileReducer,
	articlesPage: articlesPageReducer,
	articleDetails: articleDetailsReducer,
	addCommentForm: addCommentReducer,
	articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (state: DeepPartial<StoreSchema>) => (StoryComponent: Story) => {
	return (
		<StoreProvider initialState={state} asyncReducers={asyncReducers}>
			<StoryComponent />
		</StoreProvider>
	);
};
