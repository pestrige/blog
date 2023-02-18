import React from "react";
import { Button, ButtonSize, ButtonTheme } from "shared/ui";
import cls from "./SidebarSwitcher.module.scss";

interface Props {
	onToggle: () => void;
	isCollapsed: boolean;
}

export const SidebarSwitcher = ({ onToggle, isCollapsed }: Props): JSX.Element => {
	return (
		<Button
			data-testid="sidebar-toggle-test"
			onClick={onToggle}
			className={cls.root}
			theme={ButtonTheme.BACKGROUND_INVERTED}
			square
			size={ButtonSize.L}
		>
			{isCollapsed ? ">" : "<"}
		</Button>
	);
};
