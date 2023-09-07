import { themeType } from '@/@types';

export const getTheme = (): themeType => {
  const sysTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'darkTheme'
    : 'lightTheme';

  const localTheme = localStorage.getItem('theme') as themeType;

  const theme =
    localTheme === 'lightTheme' ||
    localTheme === 'darkTheme' ||
    localTheme === 'systemTheme'
      ? localTheme
      : sysTheme;

  return theme;
};

export const setTheme = (theme: themeType): themeType => {
  localStorage.setItem('theme', theme);
  switch (theme) {
    case 'lightTheme':
      document.documentElement.classList.remove('dark');
      return theme;
    case 'darkTheme':
      document.documentElement.classList.add('dark');
      return theme;
    case 'systemTheme':
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark');
      return theme;
  }
};

