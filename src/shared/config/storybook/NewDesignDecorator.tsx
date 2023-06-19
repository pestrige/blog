import React from "react";
import { Story } from "@storybook/react";
import { setFeatureFlags } from "@/shared/lib";
import { getAllFeatureFlags } from "@/shared/lib/features/lib/setGetFeatures";

export const NewDesignDecorator = () => (StoryComponent: Story) => {
	setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true });

	return (
		<div className="app-redesigned">
			<StoryComponent />
		</div>
	);
};
