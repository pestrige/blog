import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { THEMES } from "@/shared/lib";
import { StarRating } from "./StarRating";

export default {
	title: "shared/StarRating",
	component: StarRating,
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

// Light
export const Light = Template.bind({});
Light.args = { rating: 3 };

// Dark
export const Dark = Template.bind({});
Dark.args = { rating: 3 };
Dark.decorators = [ThemeDecorator(THEMES.dark)];
