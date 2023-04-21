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
};

addDecorator(RouterDecorator);
addDecorator(StoryDecorator);
addDecorator(SuspenseDecorator);
addDecorator(ThemeDecorator(THEMES.light));
