import React, { memo, ReactNode, useCallback } from "react";
import { Button, ButtonTheme } from "@/shared/ui";
import { BlueThemeIcon, DarkThemeIcon, LightThemeIcon } from "@/shared/assets";
import { classNames, Theme, THEMES, useTheme } from "@/shared/lib";
import { useAppDispatch } from "@/shared/hooks";
import { saveJsonSettings } from "@/entities/User";
import cls from "./ThemeSwitcher.module.scss";

const SwitcherIcons: Record<Theme, ReactNode> = {
	[THEMES.dark]: <DarkThemeIcon />,
	[THEMES.light]: <LightThemeIcon />,
	[THEMES.alt]: <BlueThemeIcon />,
};

interface Props {
	className?: string;
}

export const ThemeSwitcher = memo(({ className }: Props): JSX.Element => {
	const { theme, toggleTheme } = useTheme();
	const dispatch = useAppDispatch();

	const handleThemeChange = useCallback(() => {
		toggleTheme((newTheme) => {
			dispatch(saveJsonSettings({ theme: newTheme }));
		});
	}, [toggleTheme, dispatch]);

	return (
		<Button
			onClick={handleThemeChange}
			theme={ButtonTheme.CLEAR}
			className={classNames(cls.root, className)}
		>
			{SwitcherIcons[theme] ?? <BlueThemeIcon />}
		</Button>
	);
});
