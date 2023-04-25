import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { THEMES } from "shared/lib";
import { Button } from "shared/ui";
import { Dropdown } from "./Dropdown";

/* eslint-disable i18next/no-literal-string */
const props = {
	trigger: <Button>Open</Button>,
	items: [{ content: "First" }, { content: "Second" }, { content: "Third" }],
};
/* eslint-enable i18next/no-literal-string */

export default {
	title: "shared/Dropdown",
	component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

// Light
export const Light = Template.bind({});
Light.args = props;

// Dark
export const Dark = Template.bind({});
Dark.args = props;
Dark.decorators = [ThemeDecorator(THEMES.dark)];
