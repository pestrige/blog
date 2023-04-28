import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import withMock from "storybook-addon-mock";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";
import { THEMES } from "@/shared/lib";
import { NotificationButton } from "./NotificationButton";

const notification = {
	id: "1",
	title: "Уведомление 1",
	description: "Произошло какое-то событие",
	userId: "1",
};

export default {
	title: "features/NotificationButton",
	component: NotificationButton,
	decorators: [withMock],
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />;

// Light
export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];
Light.parameters = {
	mockData: [
		{
			url: `${__API__}/notifications`,
			method: "GET",
			status: 200,
			response: [
				{ ...notification, id: "1" },
				{ ...notification, id: "2" },
				{ ...notification, id: "3" },
			],
		},
	],
};

// Dark
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(THEMES.dark), StoreDecorator({})];
Light.parameters = {
	mockData: [
		{
			url: `${__API__}/notifications`,
			method: "GET",
			status: 200,
			response: [
				{ ...notification, id: "1" },
				{ ...notification, id: "2" },
				{ ...notification, id: "3" },
			],
		},
	],
};
