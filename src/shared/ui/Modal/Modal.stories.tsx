import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Modal } from "@/shared/ui";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { THEMES } from "@/shared/lib";

export default {
	title: "shared/Modal",
	component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
	children: "Modal example",
	isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
	children: "Modal example",
	isOpen: true,
};
Dark.decorators = [ThemeDecorator(THEMES.dark)];
