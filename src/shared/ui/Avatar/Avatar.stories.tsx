import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Avatar } from "./Avatar";

export default {
	title: "shared/Avatar",
	component: Avatar,
	args: { to: "/" },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
	src: "https://i.pravatar.cc/150?img=1",
};

export const Small = Template.bind({});
Small.args = {
	src: "https://i.pravatar.cc/150?img=1",
	size: 50,
};
