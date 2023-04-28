import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { THEMES } from "@/shared/lib";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";
import { Navbar } from "./Navbar";

export default {
	title: "widgets/Navbar",
	component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

const userState = { user: { authData: { id: "1", username: "admin " } } };

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const LightLogged = Template.bind({});
LightLogged.args = {};
LightLogged.decorators = [StoreDecorator(userState)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(THEMES.dark), StoreDecorator({})];

export const DarkLogged = Template.bind({});
DarkLogged.args = {};
DarkLogged.decorators = [ThemeDecorator(THEMES.dark), StoreDecorator(userState)];
