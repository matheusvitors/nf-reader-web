import { useContext } from "react";
import { SystemThemeContext } from "@/styles/theme-context";
import { light, dark } from "@/styles/themes";

export const useSystemTheme = () => {
	const { theme, setTheme } = useContext(SystemThemeContext);
	const KEY_THEME = '@nf:theme'

	const changeTheme = (theme: 'light' | 'dark') => {
		setTheme(theme);
		localStorage.setItem(KEY_THEME, theme);
	}

	const getTheme = () => {
		const theme =  localStorage.getItem(KEY_THEME);
		return theme && theme === 'light' ? light : dark;
	}

	return { theme, changeTheme, getTheme };
}
