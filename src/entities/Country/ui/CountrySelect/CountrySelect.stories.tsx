import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { THEMES } from "shared/lib";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { CountrySelect } from "./CountrySelect";

export default {
	title: "entities/CountrySelect",
	component: CountrySelect,
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(THEMES.dark)];
