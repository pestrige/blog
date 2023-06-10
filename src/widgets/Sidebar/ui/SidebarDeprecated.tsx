import React, { memo } from "react";
import { classNames } from "@/shared/lib";
import { MainMenu } from "@/features/MainMenu";
import { HStack } from "@/shared/ui";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { LanguageSwitcher } from "@/features/LanguageSwitcher";
import { SidebarSwitcher } from "@/features/SidebarSwitcher";
import { SidebarProps } from "./Sidebar";
import cls from "./Sidebar.module.scss";

/**
 * Old design
 */

interface Props extends SidebarProps {
	isCollapsed: boolean;
	onToggle: () => void;
}

export const SidebarDeprecated = memo(function SidebarDeprecated({
	isCollapsed,
	onToggle,
	className,
}: Props): JSX.Element {
	return (
		<div
			data-testid="sidebar-test"
			className={classNames(cls.root, { [cls.collapsed]: isCollapsed }, className)}
		>
			<MainMenu isCollapsed={isCollapsed} />

			<HStack justify="center" max className={cls.switches}>
				<ThemeSwitcher />
				<LanguageSwitcher short={isCollapsed} />
			</HStack>

			<SidebarSwitcher onToggle={onToggle} isCollapsed={isCollapsed} />
		</div>
	);
});
