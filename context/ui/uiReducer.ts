import { setTheme } from '@/helpers';
import { UIState } from './';
import { themeType } from '@/@types';

type UIActionType =
  | { type: 'UI - Nav Menu', isNavMenuOpen: boolean  }
  | { type: 'UI - Theme'; theme: themeType };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'UI - Nav Menu':
      return {
        ...state,
        isNavMenuOpen: action.isNavMenuOpen,
      };

    case 'UI - Theme':
      setTheme(action.theme);
      return {
        ...state,
        currentTheme: action.theme,
      };
    default:
      return state;
  }
};
