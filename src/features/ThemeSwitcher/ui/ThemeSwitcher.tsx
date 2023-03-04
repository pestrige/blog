import React, { memo, ReactNode } from "react";
import { Button, ButtonTheme } from "shared/ui";
import { DarkThemeIcon, LightThemeIcon } from "shared/assets";
import { classNames, Theme, THEMES, useTheme } from "shared/lib";
import cls from "./ThemeSwitcher.module.scss";

const SwitcherIcons: Record<Theme, ReactNode> = {
	[THEMES.dark]: <DarkThemeIcon />,
	[THEMES.light]: <LightThemeIcon />,
};

interface Props {
	className?: string;
}

export const ThemeSwitcher = memo(({ className }: Props): JSX.Element => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button onClick={toggleTheme} theme={ButtonTheme.CLEAR} className={classNames(cls.root, className)}>
			{SwitcherIcons[theme]}
		</Button>
	);
});
