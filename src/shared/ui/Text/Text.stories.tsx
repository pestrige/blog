import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { THEMES } from "shared/lib";
import { Text, TextTheme } from "./Text";

export default {
	title: "shared/Text",
	component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

// Light
export const Light = Template.bind({});
Light.args = {
	title: "Title text lorem",
	text: "Description text lorem",
};

// Dark
export const Dark = Template.bind({});
Dark.args = {
	title: "Title text lorem",
	text: "Description text lorem",
};
Dark.decorators = [ThemeDecorator(THEMES.dark)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
	title: "Title text lorem",
};

export const OnlyText = Template.bind({});
OnlyText.args = {
	text: "Description text lorem",
};

// error
export const Error = Template.bind({});
Error.args = {
	title: "Title text lorem",
	text: "Description text lorem",
	theme: TextTheme.ERROR,
};
