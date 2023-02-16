import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, THEMES, ThemeContext } from "shared/lib";

interface UseThemeResult {
	toggleTheme: () => void;
	theme: Theme;
}

export const useTheme = (): UseThemeResult => {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = () => {
		const newTheme = theme === THEMES.dark ? THEMES.light : THEMES.dark;
		setTheme(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};

	return { theme, toggleTheme };
};
