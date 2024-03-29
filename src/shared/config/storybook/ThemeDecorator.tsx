import { Story } from "@storybook/react";
import { Theme } from "@/shared/lib";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
	const rootElement = document.getElementById("root");
	if (rootElement) {
		rootElement.className = theme;
	}

	return (
		<div className="app">
			<StoryComponent />
		</div>
	);
};
