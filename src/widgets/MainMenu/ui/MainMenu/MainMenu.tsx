import React, { memo } from "react";
import { classNames } from "shared/lib";
import { mainMenuItems } from "../../model/menuItems";
import { MainMenuItem } from "../../ui/MainMenuItem/MainMenuItem";
import cls from "./MainMenu.module.scss";

interface Props {
	className?: string;
	isCollapsed: boolean;
}

export const MainMenu = memo(({ className, isCollapsed }: Props): JSX.Element => {
	return (
		<nav className={classNames(cls.wrapper, className)}>
			<ul className={cls.links}>
				{mainMenuItems.map((item) => (
					<li className={cls.linkWrapper} key={item.path}>
						<MainMenuItem collapsed={isCollapsed} item={item} />
					</li>
				))}
			</ul>
		</nav>
	);
});
