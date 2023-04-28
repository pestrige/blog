import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import withMock from "storybook-addon-mock";

import { Article, ArticleType } from "@/entities/Article";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";
import { ArticleRecommendations } from "./ArticleRecommendations";

export default {
	title: "features/ArticleRecommendations",
	component: ArticleRecommendations,
	decorators: [withMock],
} as ComponentMeta<typeof ArticleRecommendations>;

const Template: ComponentStory<typeof ArticleRecommendations> = (args) => (
	<ArticleRecommendations {...args} />
);

const article: Article = {
	id: "1",
	img: "https://miro.medium.com/max/1200/1*FNakkrty3kjOvNU8m5iQfw.png",
	createdAt: "",
	views: 123,
	user: { id: "1", username: "123" },
	blocks: [],
	type: [ArticleType.IT],
	title: "Заголовок",
	subtitle: "Подзаголовок статьи",
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
	mockData: [
		{
			url: `${__API__}/articles?_limit=3`,
			method: "GET",
			status: 200,
			response: [
				{ ...article, id: "1" },
				{ ...article, id: "2" },
				{ ...article, id: "3" },
			],
		},
	],
};
