import { Story } from "@storybook/react";
import { StoreSchema } from "shared/config";
import { StoreProvider } from "app/providers";
import { loginReducer } from "features/AuthByUsername/model";
import { profileReducer } from "features/EditProfileCard/model";
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { ReducersList } from "shared/hooks";

const asyncReducers: ReducersList = {
	login: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer,
};

export const StoreDecorator = (state: DeepPartial<StoreSchema>) => (StoryComponent: Story) => {
	return (
		<StoreProvider initialState={state} asyncReducers={asyncReducers}>
			<StoryComponent />
		</StoreProvider>
	);
};
