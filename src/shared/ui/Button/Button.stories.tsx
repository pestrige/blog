import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { THEMES } from "shared/lib";
import { Button, ButtonTheme } from "./Button";

export default {
	title: "shared/Button",
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// primary
export const Primary = Template.bind({});
Primary.args = {
	children: "Text",
};

// clear
export const Clear = Template.bind({});
Clear.args = {
	children: "Text",
	theme: ButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
	children: "Text",
	theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(THEMES.dark)];

// outline
export const Outline = Template.bind({});
Outline.args = {
	children: "Text",
	theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
	children: "Text",
	theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(THEMES.dark)];
