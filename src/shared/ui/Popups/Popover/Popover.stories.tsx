import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { THEMES } from "@/shared/lib";
import { Popover } from "./Popover";

export default {
	title: "shared/Popover",
	component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
	<Popover {...args}>
		<div>
			<div>123</div>
			<div>456</div>
		</div>
	</Popover>
);

// Light
export const Light = Template.bind({});
Light.args = {
	trigger: "Открыть",
};

// Dark
export const Dark = Template.bind({});
Dark.args = {
	trigger: "Открыть",
};
Dark.decorators = [ThemeDecorator(THEMES.dark)];
