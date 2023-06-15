import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { THEMES } from "@/shared/lib";
import { Card } from "./Card";

/* eslint-disable i18next/no-literal-string */
const children = (
	<div>
		<h1>Карточка</h1>
		<p>Просто карточка</p>
	</div>
);
/* eslint-enable */

export default {
	title: "redesigned/shared/Card",
	component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

// Light
export const Light = Template.bind({});
Light.args = { children };

// Dark
export const Dark = Template.bind({});
Dark.args = { children };
Dark.decorators = [ThemeDecorator(THEMES.dark)];
