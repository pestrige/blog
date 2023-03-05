import { createContext } from "react";

export const LOCAL_STORAGE_THEME_KEY = "theme";

export const THEMES = {
	dark: "dark",
	light: "light",
} as const;

export type Theme = keyof typeof THEMES;

interface ThemeContextProps {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

const initialContext: ThemeContextProps = {
	theme: THEMES.light,
	setTheme: () => undefined,
};

export const ThemeContext = createContext<ThemeContextProps>(initialContext);
