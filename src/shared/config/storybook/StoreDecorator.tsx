import { Story } from "@storybook/react";
import { DeepPartial } from "@reduxjs/toolkit";
import { StoreSchema } from "shared/config";
import { StoreProvider } from "app/providers";

export const StoreDecorator = (state: DeepPartial<StoreSchema>) => (StoryComponent: Story) => {
	return (
		<StoreProvider initialState={state}>
			<StoryComponent />
		</StoreProvider>
	);
};
