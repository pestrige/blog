import React, { memo, useMemo } from "react";
import { classNames } from "shared/lib";
import { useIsAuthSelector, useUser } from "entities/User";
import { mainMenuItems } from "../../model/menuItems";
import { MainMenuItem } from "../../ui/MainMenuItem/MainMenuItem";
import cls from "./MainMenu.module.scss";

interface Props {
	className?: string;
	isCollapsed: boolean;
}

export const MainMenu = memo(({ className, isCollapsed }: Props): JSX.Element => {
	const isAuth = useIsAuthSelector();
	const { id } = useUser();

	const menuItems = useMemo(
		() => mainMenuItems.filter(({ isAuthOnly }) => !(isAuthOnly && !isAuth)),
		[isAuth]
	);

	return (
		<nav className={classNames(cls.wrapper, className)}>
			<ul className={cls.links}>
				{menuItems.map((item) => (
					<li className={cls.linkWrapper} key={item.path}>
						<MainMenuItem collapsed={isCollapsed} item={item} pathId={id} />
					</li>
				))}
			</ul>
		</nav>
	);
});
