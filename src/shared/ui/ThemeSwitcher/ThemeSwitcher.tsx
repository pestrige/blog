import React, { ReactNode } from 'react';
import { Theme, useTheme } from "app/providers";
import { Button, ButtonTheme } from "shared/ui";
import { DarkThemeIcon, LightThemeIcon } from "shared/assets";
import cls from "./ThemeSwitcher.module.scss";

const SwitcherIcons: Record<Theme, ReactNode> = {
	[Theme.DARK]: <DarkThemeIcon/>,
	[Theme.LIGHT]: <LightThemeIcon/>
}

export const ThemeSwitcher = ({}): JSX.Element => {
	const { theme, toggleTheme } = useTheme();

	return (
	 <Button onClick={toggleTheme} theme={ButtonTheme.CLEAR} className={cls.root}>
		 {SwitcherIcons[theme]}
	 </Button>
	);
};
