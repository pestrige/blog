import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { THEMES } from "shared/lib";
import { Drawer } from "./Drawer";

export default {
	title: "shared/Drawer",
	component: Drawer,
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

// Light
export const Light = Template.bind({});
Light.args = {
	children: "Drawer example",
	isOpen: true,
};

// Dark
export const Dark = Template.bind({});
Dark.args = {
	children: "Drawer example",
	isOpen: true,
};
Dark.decorators = [ThemeDecorator(THEMES.dark)];
