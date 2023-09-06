import { FC, ReactElement, useReducer } from 'react';
import { UIContext, uiReducer } from './';
import { themeType } from '@/@types';
import { getTheme, setTheme } from '@/helpers';

export interface UIState {
  isNavMenuOpen: boolean;
  currentTheme: themeType;
}

interface Props {
  children: ReactElement;
}

const UI_INITIAL_STATE: UIState = {
  isNavMenuOpen: false,
  currentTheme:
    typeof window !== 'undefined' ? setTheme(getTheme()) : 'systemTheme',
};

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const setNavMenuOpen = (isNavMenuOpen: boolean) =>
    dispatch({ type: 'UI - Nav Menu', isNavMenuOpen });

  const setTheme = (theme: themeType) =>
    dispatch({ type: 'UI - Theme', theme });

  return (
    <UIContext.Provider
      value={{
        ...state,

        // Methods
        setNavMenuOpen,
        setTheme,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
