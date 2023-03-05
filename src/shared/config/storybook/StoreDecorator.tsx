import { Story } from "@storybook/react";
import { StoreSchema } from "shared/config";
import { StoreProvider } from "app/providers";
import { loginReducer } from "features/AuthByUsername/model";
import { profileReducer } from "entities/Profile";
import { ReducersList } from "shared/hooks";

const asyncReducers: ReducersList = {
	login: loginReducer,
	profile: profileReducer,
};

export const StoreDecorator = (state: DeepPartial<StoreSchema>) => (StoryComponent: Story) => {
	return (
		<StoreProvider initialState={state} asyncReducers={asyncReducers}>
			<StoryComponent />
		</StoreProvider>
	);
};
