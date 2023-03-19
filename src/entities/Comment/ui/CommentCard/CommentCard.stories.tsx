import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { THEMES } from "shared/lib";
import { CommentCard } from "./CommentCard";

export default {
	title: "shared/CommentCard",
	component: CommentCard,
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

// Light
export const Light = Template.bind({});
Light.args = {};

// Dark
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(THEMES.dark)];
