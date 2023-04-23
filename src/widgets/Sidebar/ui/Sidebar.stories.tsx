import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import { THEMES } from "shared/lib";
import { Sidebar } from "./Sidebar";

export default {
	title: "features/Sidebar",
	component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

const authState = { user: { authData: { id: "123" } } };

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator(authState)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(THEMES.dark), StoreDecorator(authState)];

export const NoAuth = Template.bind({});
NoAuth.args = {};
NoAuth.decorators = [StoreDecorator({})];
