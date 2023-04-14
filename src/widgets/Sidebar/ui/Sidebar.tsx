import { memo, useState } from "react";
import { classNames } from "shared/lib";
import { LanguageSwitcher } from "features/LanguageSwitcher";
import { SidebarSwitcher } from "features/SidebarSwitcher";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { MainMenu } from "widgets";
import { HStack } from "shared/ui";
import cls from "./Sidebar.module.scss";

interface Props {
	className?: string;
}

export const Sidebar = memo(({ className = "123" }: Props): JSX.Element => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	const onToggle = () => setIsCollapsed((prev) => !prev);

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
