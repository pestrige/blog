import React, { memo } from "react";
import { classNames } from "shared/lib";
import { MainMenuItem } from "../../ui/MainMenuItem/MainMenuItem";
import { useMenuItemsSelector } from "../../model/selectors/getMenuItems";
import cls from "./MainMenu.module.scss";

interface Props {
	className?: string;
	isCollapsed: boolean;
}

export const MainMenu = memo(({ className, isCollapsed }: Props): JSX.Element => {
	const menuItems = useMenuItemsSelector();

	return (
		<nav className={classNames(cls.wrapper, className)}>
			<ul className={cls.links}>
				{menuItems.map((item) => (
					<li className={cls.linkWrapper} key={item.path}>
						<MainMenuItem collapsed={isCollapsed} item={item} />
					</li>
				))}
			</ul>
		</nav>
	);
});
