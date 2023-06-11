import React, { memo, useCallback } from "react";
import { Button, ButtonTheme } from "@/shared/ui";
import { ThemeIcon } from "@/shared/assets";
import { classNames, useTheme } from "@/shared/lib";
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
		<Button
			onClick={handleThemeChange}
			theme={ButtonTheme.CLEAR}
			className={classNames(cls.root, className)}
		>
			<ThemeIcon className={cls.icon} />
		</Button>
	);
});
