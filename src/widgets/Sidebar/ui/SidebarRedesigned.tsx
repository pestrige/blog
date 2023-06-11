import React, { memo } from "react";
import { MainMenu } from "@/features/MainMenu";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { LanguageSwitcher } from "@/features/LanguageSwitcher";
import { SidebarSwitcher } from "@/features/SidebarSwitcher";
import { classNames } from "@/shared/lib";
import { AppLogo, HStack } from "@/shared/ui";
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
			<AppLogo isSmall={isCollapsed} className={cls.appLogo} />

			<MainMenu isCollapsed={isCollapsed} />

			<HStack justify="center" max className={cls.switches}>
				<ThemeSwitcher />
				<LanguageSwitcher short={isCollapsed} />
			</HStack>

			<SidebarSwitcher onToggle={onToggle} isCollapsed={isCollapsed} />
		</div>
	);
});
