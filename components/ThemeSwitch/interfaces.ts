import { themeType } from '@/@types';

export interface ThemeSwitchProps {
  currentTheme: themeType;
	setTheme: (theme: themeType) => void;
}