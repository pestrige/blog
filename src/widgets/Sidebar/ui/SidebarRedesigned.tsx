import React, { memo } from "react";
import { classNames } from "@/shared/lib";
import { AppLogo } from "@/shared/ui";
import { SidebarProps } from "./Sidebar";
import cls from "./Sidebar.module.scss";

/**
 * New design
 */

interface Props extends SidebarProps {
	isCollapsed: boolean;
	onToggle: () => void;
}

export const SidebarRedesigned = memo(function SidebarDeprecated({
	isCollapsed,
	onToggle,
	className,
}: Props): JSX.Element {
	return (
		<div
			data-testid="sidebar-test"
			className={classNames(cls.rootRedesigned, { [cls.collapsed]: isCollapsed }, className)}
		>
			<AppLogo className={cls.appLogo} />
		</div>
	);
});
