import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Flex } from "./Flex";

/* eslint-disable i18next/no-literal-string */
const children = (
	<>
		<div>First</div>
		<div>Second</div>
		<div>Third</div>
		<div>Fourth</div>
	</>
);
/* eslint-enable i18next/no-literal-string */

export default {
	title: "shared/Flex",
	component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

// Row
export const Row = Template.bind({});
Row.args = {
	children,
};

// Column
export const Column = Template.bind({});
Column.args = {
	children,
	direction: "column",
};

// RowGap4
export const RowGap4 = Template.bind({});
RowGap4.args = {
	children,
	gap: 4,
};

// RowGap16
export const RowGap16 = Template.bind({});
RowGap16.args = {
	children,
	gap: 16,
};

// RowGap24
export const RowGap24 = Template.bind({});
RowGap16.args = {
	children,
	gap: 24,
};

// RowGap32
export const RowGap32 = Template.bind({});
RowGap32.args = {
	children,
	gap: 32,
};
