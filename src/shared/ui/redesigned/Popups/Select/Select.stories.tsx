import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { THEMES } from "@/shared/lib";
import { Select } from "./Select";

export default {
	title: "redesigned/shared/Select",
	component: Select,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Light = Template.bind({});
Light.args = {
	label: "Укажите значение",
	options: [
		{ value: "123", content: "Первый пункт" },
		{ value: "1234", content: "Второй пункт" },
	],
};

export const Dark = Template.bind({});
Dark.args = {
	label: "Укажите значение",
	options: [
		{ value: "123", content: "Первый пункт" },
		{ value: "1234", content: "Второй пункт" },
	],
};
Dark.decorators = [ThemeDecorator(THEMES.dark)];
