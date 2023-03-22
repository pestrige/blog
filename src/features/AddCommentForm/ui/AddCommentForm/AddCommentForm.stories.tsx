import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { THEMES } from "shared/lib";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import { action } from "@storybook/addon-actions";
import AddCommentForm from "./AddCommentForm";

export default {
	title: "features/AddCommentForm",
	component: AddCommentForm,
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

// Light
export const Light = Template.bind({});
Light.args = { onSubmit: action("onSubmit") };
Light.decorators = [StoreDecorator({})];

// Dark
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(THEMES.dark), StoreDecorator({})];
