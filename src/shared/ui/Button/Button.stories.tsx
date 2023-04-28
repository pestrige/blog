import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { THEMES } from "@/shared/lib";
import { Button, ButtonSize, ButtonTheme } from "./Button";

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

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
	children: "Text",
	disabled: true,
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

export const ClearInverted = Template.bind({});
ClearInverted.args = {
	children: "Text",
	theme: ButtonTheme.CLEAR_INVERTED,
};

// outline
export const Outline = Template.bind({});
Outline.args = {
	children: "Text",
	theme: ButtonTheme.OUTLINE,
};

export const OutlineDisabled = Template.bind({});
OutlineDisabled.args = {
	children: "Text",
	theme: ButtonTheme.OUTLINE,
	disabled: true,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
	children: "Text",
	theme: ButtonTheme.OUTLINE,
	size: ButtonSize.L,
};

export const OutlineSizeXl = Template.bind({});
OutlineSizeXl.args = {
	children: "Text",
	theme: ButtonTheme.OUTLINE,
	size: ButtonSize.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
	children: "Text",
	theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(THEMES.dark)];

// background
export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
	children: "Text",
	theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
	children: "Text",
	theme: ButtonTheme.BACKGROUND_INVERTED,
};

// square
export const Square = Template.bind({});
Square.args = {
	children: ">",
	theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
	children: ">",
	theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSize.L,
};

export const SquareSizeXl = Template.bind({});
SquareSizeXl.args = {
	children: ">",
	theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSize.XL,
};
