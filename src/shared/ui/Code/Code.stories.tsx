import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { THEMES } from "@/shared/lib";
import { Code } from "./Code";

const codeExample =
	// eslint-disable-next-line max-len
	'<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;';

export default {
	title: "shared/Code",
	component: Code,
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

// Light
export const Light = Template.bind({});
Light.args = {
	text: codeExample,
};

// Dark
export const Dark = Template.bind({});
Dark.args = {
	text: codeExample,
};
Dark.decorators = [ThemeDecorator(THEMES.dark)];
