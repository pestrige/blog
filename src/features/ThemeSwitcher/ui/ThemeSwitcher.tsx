import React, { memo, useCallback } from "react";
import { ButtonDeprecated, ButtonIcon, ButtonTheme } from "@/shared/ui";
import { ThemeIcon, ThemeIconDeprecated } from "@/shared/assets";
import { classNames, ToggleFeaturesWrapper, useTheme } from "@/shared/lib";
import { useAppDispatch } from "@/shared/hooks";
import { saveJsonSettings } from "@/entities/User";
import cls from "./ThemeSwitcher.module.scss";

interface Props {
	className?: string;
}

export const ThemeSwitcher = memo(({ className }: Props): JSX.Element => {
	const { toggleTheme } = useTheme();
	const dispatch = useAppDispatch();

	const handleThemeChange = useCallback(() => {
		toggleTheme((newTheme) => {
			dispatch(saveJsonSettings({ theme: newTheme }));
		});
	}, [toggleTheme, dispatch]);

	return (
		<ToggleFeaturesWrapper
			featureName="isAppRedesigned"
			on={<ButtonIcon Svg={ThemeIcon} onClick={handleThemeChange} />}
			off={
				<ButtonDeprecated
					onClick={handleThemeChange}
					theme={ButtonTheme.CLEAR}
					className={classNames(cls.root, className)}
				>
					<ThemeIconDeprecated className={cls.icon} />
				</ButtonDeprecated>
			}
		/>
	);
});
