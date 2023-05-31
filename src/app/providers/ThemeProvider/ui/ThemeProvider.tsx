import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { Theme, THEMES, ThemeContext } from "@/shared/lib";
import { useJsonSettings } from "@/entities/User";

const rootElement = document.getElementById("root");

interface Props {
	children: ReactNode;
}

export const ThemeProvider = ({ children }: Props): JSX.Element => {
	const { theme: initialTheme = THEMES.light } = useJsonSettings();

	const [theme, setTheme] = useState<Theme>(initialTheme);

	const providerValue = useMemo(
		() => ({
			theme,
			setTheme,
		}),
		[theme],
	);

	useEffect(() => {
		setTheme(initialTheme);
	}, [initialTheme]);

	useEffect(() => {
		if (rootElement) {
			rootElement.className = theme;
		}
	}, [theme]);

	return <ThemeContext.Provider value={providerValue}>{children}</ThemeContext.Provider>;
};
