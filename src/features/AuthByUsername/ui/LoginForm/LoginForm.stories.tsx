import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { THEMES } from "shared/lib";
import LoginForm from "./LoginForm";

export default {
	title: "features/LoginForm",
	component: LoginForm,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({ login: { username: "admin", password: "123" } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
	StoreDecorator({ login: { username: "admin", password: "123" } }),
	ThemeDecorator(THEMES.dark),
];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [
	StoreDecorator({ login: { username: "admin", password: "123", error: "Ошибка запроса" } }),
];
