import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { THEMES } from "shared/lib";
import { AppLink, AppLinkTheme } from "./AppLink";

export default {
	title: "shared/AppLink",
	component: AppLink,
	args: { to: "/" },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: "Link text",
	theme: AppLinkTheme.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
	children: "Link text",
	theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(THEMES.dark)];

export const Secondary = Template.bind({});
Secondary.args = {
	children: "Link text",
	theme: AppLinkTheme.SECONDARY,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
	children: "Link text",
	theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(THEMES.dark)];
