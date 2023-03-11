import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AvatarImg from "shared/assets/tests/storybook-avatar.webp";
import { Avatar } from "./Avatar";

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
