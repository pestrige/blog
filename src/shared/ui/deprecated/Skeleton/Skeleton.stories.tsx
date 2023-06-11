import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { THEMES } from "@/shared/lib";
import { Skeleton } from "./Skeleton";

export default {
	title: "shared/Skeleton",
	component: Skeleton,
	argTypes: {
		backgroundColor: { control: "color" },
	},
	parameters: { loki: { skip: true } },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	width: "100%",
	height: 200,
};

export const Circle = Template.bind({});
Circle.args = {
	border: "50%",
	width: 100,
	height: 100,
};
export const CircleDark = Template.bind({});
CircleDark.args = {
	border: "50%",
	width: 100,
	height: 100,
};
CircleDark.decorators = [ThemeDecorator(THEMES.dark)];

export const NormalDark = Template.bind({});
NormalDark.args = {
	width: "100%",
	height: 200,
};
NormalDark.decorators = [ThemeDecorator(THEMES.dark)];
