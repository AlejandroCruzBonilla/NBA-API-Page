import { ChangeEvent } from 'react';

export interface ThemeSwitcherProps {
  currentTheme: string;
  toggleTheme: (event: ChangeEvent<HTMLInputElement>) => void
}