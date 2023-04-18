import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ArticleSortSelector } from "./ArticleSortSelector";

export default {
	title: "entities/ArticleSortSelector",
	component: ArticleSortSelector,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => <ArticleSortSelector {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
