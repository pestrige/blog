import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { THEMES } from "shared/lib";
import { CommentList } from "./CommentList";

const comments = [
	{
		id: "1",
		text: "hello world",
		user: { id: "1", username: "Ivan" },
	},
	{
		id: "2",
		text: "another hello world 2",
		user: { id: "1", username: "Ivan" },
	},
];

export default {
	title: "entities/CommentList",
	component: CommentList,
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

// Light
export const Light = Template.bind({});
Light.args = { comments };

// Dark
export const Dark = Template.bind({});
Dark.args = { comments };
Dark.decorators = [ThemeDecorator(THEMES.dark)];

// Loading
export const Loading = Template.bind({});
Loading.parameters = { loki: { skip: true } };
Loading.args = { isLoading: true };
