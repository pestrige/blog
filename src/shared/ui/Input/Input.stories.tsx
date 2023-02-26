import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "shared/ui";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { THEMES } from "shared/lib";

export default {
	title: "shared/Input",
	component: Input,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Light = Template.bind({});
Light.args = {
	placeholder: "Type text",
	value: "123123",
};

export const Dark = Template.bind({});
Dark.args = {
	placeholder: "Type text",
	value: "123123",
};
Dark.decorators = [ThemeDecorator(THEMES.dark)];
