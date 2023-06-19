import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator";
import { THEMES } from "@/shared/lib";
import { CommentCard } from "./CommentCard";

const comment = {
	id: "1",
	text: "hello world",
	user: { id: "1", username: "Ivan" },
};

export default {
	title: "entities/CommentCard",
	component: CommentCard,
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

// Light
export const Light = Template.bind({});
Light.args = { comment };

// Dark
export const Dark = Template.bind({});
Dark.args = { comment };
Dark.decorators = [ThemeDecorator(THEMES.dark)];

// Redesigned
export const Redesigned = Template.bind({});
Redesigned.args = { comment };
Redesigned.decorators = [NewDesignDecorator(), ThemeDecorator(THEMES.dark)];
