import { memo, useState } from "react";
import { classNames } from "shared/lib";
import { LanguageSwitcher, SidebarSwitcher, ThemeSwitcher } from "features";
import { MainMenu } from "widgets";
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

			<div className={cls.switches}>
				<ThemeSwitcher />
				<LanguageSwitcher short={isCollapsed} />
			</div>

			<SidebarSwitcher onToggle={onToggle} isCollapsed={isCollapsed} />
		</div>
	);
});
