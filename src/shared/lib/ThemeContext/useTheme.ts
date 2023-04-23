import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, THEMES, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
	toggleTheme: () => void;
	theme: Theme;
}

export const useTheme = (): UseThemeResult => {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = () => {
		let newTheme: Theme;
		switch (theme) {
			case THEMES.dark:
				newTheme = THEMES.light;
				break;
			case THEMES.light:
				newTheme = THEMES.blue;
				break;
			case THEMES.blue:
				newTheme = THEMES.dark;
				break;
			default:
				newTheme = THEMES.light;
		}
		setTheme(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};

	return { theme, toggleTheme };
};
