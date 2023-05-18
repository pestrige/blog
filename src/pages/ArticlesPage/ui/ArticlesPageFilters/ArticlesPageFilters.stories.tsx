import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { THEMES } from "@/shared/lib";
import { ArticlesPageFilters } from "./ArticlesPageFilters";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";

export default {
	title: "pages/ArticlesPageFilters",
	component: ArticlesPageFilters,
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />;

// Light
export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

// Dark
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(THEMES.dark)];
