import { themeType } from '@/@types';
import { createContext } from 'react';

interface ContextProps {
  isNavMenuOpen: boolean;
  currentTheme: themeType;

  // Methods
  setNavMenuOpen: (isNavMenuOpen: boolean) => void;
  setTheme: (theme: themeType) => void;
}

export const UIContext = createContext({} as ContextProps);
