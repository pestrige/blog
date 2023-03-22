import { Story } from "@storybook/react";
import { StoreSchema } from "shared/config";
import { StoreProvider } from "app/providers";
import { ReducersList } from "shared/hooks";
import { loginReducer } from "features/AuthByUsername/model";
import { profileReducer } from "features/EditProfileCard/model";
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { addCommentReducer } from "features/AddCommentForm/model/slice/addCommentSlice";
import { articleDetailsCommentsReducer } from "pages/DetailArticlePage/model/slice/articleDetailsCommentsSlice";

const asyncReducers: ReducersList = {
	login: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer,
	addCommentForm: addCommentReducer,
	articleDetailsComments: articleDetailsCommentsReducer,
};

export const StoreDecorator = (state: DeepPartial<StoreSchema>) => (StoryComponent: Story) => {
	return (
		<StoreProvider initialState={state} asyncReducers={asyncReducers}>
			<StoryComponent />
		</StoreProvider>
	);
};
