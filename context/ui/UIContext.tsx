import { createContext } from 'react';

interface ContextProps {
  sideMenuOpen: boolean;
  currentTheme: string;

  // Methods
  closeSideMenu: () => void;
  openSideMenu: () => void;
  setLightTheme: () => void;
  setDarkTheme: () => void;
  setSystemTheme: () => void;
}

export const UIContext = createContext({} as ContextProps);
