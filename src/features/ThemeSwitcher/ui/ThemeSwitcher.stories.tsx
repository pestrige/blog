import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { THEMES } from "@/shared/lib";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";

export default {
	title: "shared/ThemeSwitcher",
	component: ThemeSwitcher,
	args: { to: "/" },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator({ user: {} })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({ user: {} }), ThemeDecorator(THEMES.dark)];
