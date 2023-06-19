import { Story } from "@storybook/react";
import React from "react";
import { FeatureFlags } from "@/shared/types";
import { setFeatureFlags } from "@/shared/lib";

export const FeatureFlagsDecorator = (features?: FeatureFlags) => (StoryComponent: Story) => {
	setFeatureFlags(features);

	return <StoryComponent />;
};
