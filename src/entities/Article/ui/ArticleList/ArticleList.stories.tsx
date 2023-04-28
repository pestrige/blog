import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { THEMES } from "@/shared/lib";
import { ArticleList } from "./ArticleList";
import { articleExample } from "../../model/constants/articleExample";
import { Article } from "../../model/types/article";
import { ArticleView } from "../../model/constants/article";

const articles = new Array(9).fill(0).map((_, index) => ({
	...articleExample,
	id: String(index + 1),
})) as Article[];

export default {
	title: "entities/ArticleList",
	component: ArticleList,
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

// LightGrid
export const LightGrid = Template.bind({});
LightGrid.args = { articles, view: ArticleView.GRID };

// DarkGrid
export const DarkGrid = Template.bind({});
DarkGrid.args = { articles, view: ArticleView.GRID };
DarkGrid.decorators = [ThemeDecorator(THEMES.dark)];

// LightList
export const LightList = Template.bind({});
LightList.args = { articles, view: ArticleView.LIST };

// DarkList
export const DarkList = Template.bind({});
DarkList.args = { articles, view: ArticleView.LIST };
DarkList.decorators = [ThemeDecorator(THEMES.dark)];

// LoadingGrid
export const LoadingGrid = Template.bind({});
LoadingGrid.args = { articles, view: ArticleView.GRID, isLoading: true };
LoadingGrid.parameters = { loki: { skip: true } };

// LoadingGrid
export const LoadingList = Template.bind({});
LoadingList.args = { articles, view: ArticleView.LIST, isLoading: true };
LoadingList.parameters = { loki: { skip: true } };
