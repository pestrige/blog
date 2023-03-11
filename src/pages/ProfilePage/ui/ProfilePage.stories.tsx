import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import AvatarImg from "shared/assets/tests/storybook-avatar.webp";
import { THEMES } from "shared/lib";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import ProfilePage from "./ProfilePage";

const user = {
	first: "Ivan",
	lastname: "Ivanov",
	age: 36,
	currency: Currency.RUB,
	country: Country.Russia,
	city: "Moscow",
	username: "admin",
	avatar: AvatarImg,
};

export default {
	title: "pages/ProfilePage",
	component: ProfilePage,
	args: { to: "/" },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({ profile: { form: user } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(THEMES.dark), StoreDecorator({ profile: { form: user } })];
