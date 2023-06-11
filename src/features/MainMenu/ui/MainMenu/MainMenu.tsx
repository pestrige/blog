import React, { memo } from "react";
import { classNames, toggleFeatures, ToggleFeaturesWrapper } from "@/shared/lib";
import { VStack } from "@/shared/ui";
import { MainMenuItemDeprecated } from "../../ui/MainMenuItem/MainMenuItemDeprecated";
import { MainMenuItemRedesigned } from "../../ui/MainMenuItem/MainMenuItemRedesigned";
import { useMenuItemsSelector } from "../../model/selectors/getMenuItems";
import cls from "./MainMenu.module.scss";

interface Props {
	className?: string;
	isCollapsed: boolean;
}

export const MainMenu = memo(({ className, isCollapsed }: Props): JSX.Element => {
	const menuItems = useMenuItemsSelector();
	const navStyles = toggleFeatures({
		name: "isAppRedesigned",
		on: () => classNames(cls.wrapperRedesigned, { [cls.collapsed]: isCollapsed }),
		off: () => cls.wrapper,
	});

	return (
		<nav className={classNames(navStyles, className)}>
			<VStack as="ul" gap={16}>
				{menuItems.map((item) => (
					<li key={item.path} className={cls.listItem}>
						<ToggleFeaturesWrapper
							featureName="isAppRedesigned"
							on={<MainMenuItemRedesigned collapsed={isCollapsed} item={item} />}
							off={<MainMenuItemDeprecated collapsed={isCollapsed} item={item} />}
						/>
					</li>
				))}
			</VStack>
		</nav>
	);
});
