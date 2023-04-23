import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { THEMES } from "shared/lib";
import { articleExample } from "../../model/constants/articleExample";
import { ArticleView } from "../../model/constants/article";
import { ArticleListItem } from "./ArticleListItem";

export default {
	title: "entities/ArticleListItem",
	component: ArticleListItem,
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

// Light
export const Light = Template.bind({});
Light.args = { article: articleExample, view: ArticleView.LIST };

// Dark
export const Dark = Template.bind({});
Dark.args = { article: articleExample, view: ArticleView.LIST };
Dark.decorators = [ThemeDecorator(THEMES.dark)];
