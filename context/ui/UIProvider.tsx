import { FC, ReactElement, useReducer } from 'react';
import { UIContext, uiReducer } from './';
import { themeType } from '@/@types';

export interface UIState {
  sideMenuOpen: boolean;
  currentTheme: themeType;
}

interface Props {
  children: ReactElement;
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  currentTheme: 'systemTheme',
};

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => dispatch({ type: 'UI - Open Sidebar' });

  const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' });

  const setDarkTheme = () => dispatch({ type: 'UI - Dark Theme' });

  const setLightTheme = () => dispatch({ type: 'UI - Light Theme' });

  const setSystemTheme = () => dispatch({ type: 'UI - System Theme' });

  return (
    <UIContext.Provider
      value={{
        ...state,

        // Methods
        closeSideMenu,
        openSideMenu,
        setLightTheme,
        setDarkTheme,
        setSystemTheme,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
