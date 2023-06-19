import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator";
import { THEMES } from "@/shared/lib";
import { articleExample } from "../../model/constants/articleExample";
import { ArticleDetails } from "./ArticleDetails";

export default {
	title: "entities/ArticleDetails",
	component: ArticleDetails,
	parameters: { loki: { skip: true } },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

// Redesigned
export const Redesigned = Template.bind({});
Redesigned.args = {};
Redesigned.decorators = [
	NewDesignDecorator(),
	StoreDecorator({ articleDetails: { data: articleExample, isLoading: false } }),
];

// Light
export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({ articleDetails: { data: articleExample, isLoading: false } })];

// Dark
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
	ThemeDecorator(THEMES.dark),
	StoreDecorator({
		articleDetails: {
			data: articleExample,
			isLoading: false,
		},
	}),
];

// Loading
export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({ articleDetails: { isLoading: true } })];

// Error
export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({ articleDetails: { error: "Error", isLoading: false } })];
