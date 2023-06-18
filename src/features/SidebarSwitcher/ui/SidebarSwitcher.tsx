import React, { memo } from "react";
import { ButtonDeprecated, ButtonIcon, ButtonSize, ButtonTheme } from "@/shared/ui";
import { classNames, ToggleFeaturesWrapper } from "@/shared/lib";
import { ArrowIcon } from "@/shared/assets";
import cls from "./SidebarSwitcher.module.scss";

interface Props {
	onToggle: () => void;
	isCollapsed: boolean;
}

export const SidebarSwitcher = memo(({ onToggle, isCollapsed }: Props): JSX.Element => {
	return (
		<ToggleFeaturesWrapper
			featureName="isAppRedesigned"
			on={
				<ButtonIcon
					className={classNames(cls.rootRedesigned, { [cls.rootRedesignedCollapsed]: isCollapsed })}
					dataTestId="sidebar-toggle-test"
					Svg={ArrowIcon}
					onClick={onToggle}
				/>
			}
			off={
				<ButtonDeprecated
					data-testid="sidebar-toggle-test"
					onClick={onToggle}
					className={cls.root}
					theme={ButtonTheme.BACKGROUND_INVERTED}
					square
					size={ButtonSize.L}
				>
					{isCollapsed ? ">" : "<"}
				</ButtonDeprecated>
			}
		/>
	);
});
