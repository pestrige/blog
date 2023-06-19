import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { LocalStorage, Theme, ThemeContext, THEMES } from "@/shared/lib";
import { StorageKeys } from "@/shared/constants";
import { useJsonSettings } from "@/entities/User";

const rootElement = document.getElementById("root");
const fallbackTheme = LocalStorage.getItem(StorageKeys.THEME_LOCALSTORAGE_KEY) as Theme;

interface Props {
	children: ReactNode;
}

export const ThemeProvider = ({ children }: Props): JSX.Element => {
	const { theme: defaultTheme = fallbackTheme || THEMES.light } = useJsonSettings();

	const [theme, setTheme] = useState<Theme>(defaultTheme);

	const providerValue = useMemo(
		() => ({
			theme,
			setTheme,
		}),
		[theme],
	);

	useEffect(() => {
		if (defaultTheme) {
			setTheme(defaultTheme);
		}
	}, [defaultTheme]);

	useEffect(() => {
		if (rootElement) {
			rootElement.className = theme;
			LocalStorage.setItem(StorageKeys.THEME_LOCALSTORAGE_KEY, theme);
		}
	}, [theme]);

	return <ThemeContext.Provider value={providerValue}>{children}</ThemeContext.Provider>;
};
