import { Story } from "@storybook/react";
import { StoreSchema } from "@/shared/config";
import { StoreProvider } from "@/app/providers";
import { ReducersList } from "@/shared/hooks";
import { articleDetailsReducer } from "@/entities/Article/testing";
import { loginReducer } from "@/features/AuthByUsername/testing";
import { profileReducer } from "@/features/EditProfileCard/testing";
import { addCommentReducer } from "@/features/AddCommentForm/testing";
import { articlesPageReducer } from "@/pages/ArticlesPage/testing";
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
