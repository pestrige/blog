import { Story } from "@storybook/react";
import { DeepPartial } from "@reduxjs/toolkit";
import { StoreSchema } from "shared/config";
import { StoreProvider } from "app/providers";
import { loginReducer } from "features/AuthByUsername/model";
import { profileReducer } from "entities/Profile";

const asyncReducers = {
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
