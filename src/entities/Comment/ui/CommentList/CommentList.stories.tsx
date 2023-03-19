import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { THEMES } from "shared/lib";
import { CommentList } from "./CommentList";

export default {
	title: "shared/CommentList",
	component: CommentList,
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

// Light
export const Light = Template.bind({});
Light.args = {};

// Dark
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(THEMES.dark)];
