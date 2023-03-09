import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Avatar } from "./Avatar";
import AvatarImg from "./storybook-avatar.webp";

export default {
	title: "shared/Avatar",
	component: Avatar,
	args: { to: "/" },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
	src: AvatarImg,
};

export const Small = Template.bind({});
Small.args = {
	src: AvatarImg,
	size: 50,
};
