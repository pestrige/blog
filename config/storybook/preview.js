import { addDecorator } from "@storybook/react";
import { StoryDecorator } from "../../src/shared/config/storybook/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator";
import { SuspenseDecorator } from "../../src/shared/config/storybook/SuspenseDecorator";
import { THEMES } from "../../src/shared/lib";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	themes: {
		default: "light",
		list: [
			{ name: "light", class: ["root", THEMES.light], color: "#e8e8ea" },
			{ name: "dark", class: ["root", THEMES.dark], color: "#090949" },
			{ name: "blue", class: ["root", THEMES.blue], color: "#5e69ee" },
		],
	},
	layout: "fullscreen",
};

addDecorator(RouterDecorator);
addDecorator(StoryDecorator);
addDecorator(SuspenseDecorator);
addDecorator(ThemeDecorator(THEMES.light));
