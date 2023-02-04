import React, { ReactNode, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

const initialTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface Props {
	children: ReactNode
}

export const ThemeProvider = ({ children }: Props): JSX.Element => {
	const [theme, setTheme] = useState<Theme>(initialTheme);

	const providerValue = useMemo(() => ({
		theme,
		setTheme,
	}), [theme])

	return (
	 <ThemeContext.Provider value={providerValue}>
		 {children}
	 </ThemeContext.Provider>
	);
};
