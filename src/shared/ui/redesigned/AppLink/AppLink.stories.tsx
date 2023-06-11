import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { THEMES } from "@/shared/lib";
import { AppLink } from "./AppLink";

export default {
	title: "redesigned/shared/AppLink",
	component: AppLink,
	args: { to: "/" },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: "Link text",
	variant: "primary",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
	children: "Link text",
	variant: "primary",
};
PrimaryDark.decorators = [ThemeDecorator(THEMES.dark)];
