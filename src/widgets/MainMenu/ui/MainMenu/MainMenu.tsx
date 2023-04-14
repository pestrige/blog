import React, { memo } from "react";
import { classNames } from "shared/lib";
import { VStack } from "shared/ui";
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
			<VStack as="ul" gap={16}>
				{menuItems.map((item) => (
					<li key={item.path}>
						<MainMenuItem collapsed={isCollapsed} item={item} />
					</li>
				))}
			</VStack>
		</nav>
	);
});
