import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, THEMES, ThemeContext } from "shared/lib";

const rootElement = document.getElementById("root");

const initialTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || THEMES.light;

interface Props {
	children: ReactNode;
}

export const ThemeProvider = ({ children }: Props): JSX.Element => {
	const [theme, setTheme] = useState<Theme>(initialTheme);

	const providerValue = useMemo(
		() => ({
			theme,
			setTheme,
		}),
		[theme]
	);

	useEffect(() => {
		if (rootElement) {
			rootElement.className = theme;
		}
	}, [theme]);

	return <ThemeContext.Provider value={providerValue}>{children}</ThemeContext.Provider>;
};
