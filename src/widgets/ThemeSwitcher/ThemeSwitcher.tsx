import React, { ReactNode } from 'react';
import { Theme, useTheme } from 'app/providers';
import { Button, ButtonTheme } from 'shared/ui';
import { DarkThemeIcon, LightThemeIcon } from 'shared/assets';
import { classNames } from 'shared/lib';
import cls from './ThemeSwitcher.module.scss';

const SwitcherIcons: Record<Theme, ReactNode> = {
	[Theme.DARK]: <DarkThemeIcon />,
	[Theme.LIGHT]: <LightThemeIcon />,
};

interface Props {
	className?: string;
}

export const ThemeSwitcher = ({ className }: Props): JSX.Element => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			onClick={toggleTheme}
			theme={ButtonTheme.CLEAR}
			className={classNames(cls.root, className)}
		>
			{SwitcherIcons[theme]}
		</Button>
	);
};
