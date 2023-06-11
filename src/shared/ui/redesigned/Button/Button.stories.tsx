import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { THEMES } from "@/shared/lib";
import { Button } from "./Button";

export default {
	title: "redesigned/shared/Button",
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
	variant: "clear",
};

export const ClearDark = Template.bind({});
ClearDark.args = {
	children: "Text",
	variant: "clear",
};
ClearDark.decorators = [ThemeDecorator(THEMES.dark)];

// outline
export const Outline = Template.bind({});
Outline.args = {
	children: "Text",
	variant: "outline",
};

export const OutlineDisabled = Template.bind({});
OutlineDisabled.args = {
	children: "Text",
	variant: "outline",
	disabled: true,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
	children: "Text",
	variant: "outline",
	size: "L",
};

export const OutlineSizeXl = Template.bind({});
OutlineSizeXl.args = {
	children: "Text",
	variant: "outline",
	size: "XL",
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
	children: "Text",
	variant: "outline",
};
OutlineDark.decorators = [ThemeDecorator(THEMES.dark)];

// square
export const Square = Template.bind({});
Square.args = {
	children: ">",
	variant: "clear",
	square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
	children: ">",
	variant: "clear",
	square: true,
	size: "L",
};

export const SquareSizeXl = Template.bind({});
SquareSizeXl.args = {
	children: ">",
	variant: "clear",
	square: true,
	size: "XL",
};
