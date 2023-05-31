import { useContext } from "react";
import { Theme, THEMES, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
	toggleTheme: (saveTheme?: (theme: Theme) => void) => void;
	theme: Theme;
}

export const useTheme = (): UseThemeResult => {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = (saveTheme?: (theme: Theme) => void) => {
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
		saveTheme?.(newTheme);
	};

	return { theme, toggleTheme };
};
