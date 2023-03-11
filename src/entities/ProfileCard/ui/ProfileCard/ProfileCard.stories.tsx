import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import { THEMES } from "shared/lib";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { ValidateErrorsEnum } from "entities/ProfileCard";
import { ProfileCard } from "./ProfileCard";

const user = {
	first: "Ivan",
	lastname: "Ivanov",
	age: 36,
	currency: Currency.RUB,
	country: Country.Russia,
	city: "Moscow",
	username: "admin",
	avatar: "https://i.pravatar.cc/150?img=1",
};

export default {
	title: "entities/ProfileCard",
	component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Light = Template.bind({});
Light.args = { profile: user, validateErrors: {} };
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = { profile: user, validateErrors: {} };
Dark.decorators = [ThemeDecorator(THEMES.dark), StoreDecorator({})];

export const WithError = Template.bind({});
WithError.args = { profile: user, error: ValidateErrorsEnum.SERVER_ERROR };
WithError.decorators = [StoreDecorator({})];

export const WithValidateError = Template.bind({});
WithValidateError.args = {
	profile: { ...user, first: "", age: 324 },
	validateErrors: {
		first: ValidateErrorsEnum.REQUIRED_FIELD,
		age: ValidateErrorsEnum.INCORRECT_AGE,
	},
};
WithValidateError.decorators = [StoreDecorator({})];

export const IsLoading = Template.bind({});
IsLoading.args = { profile: user, isLoading: true };
IsLoading.decorators = [StoreDecorator({})];
