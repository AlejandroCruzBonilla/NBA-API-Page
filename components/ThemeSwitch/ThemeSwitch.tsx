import { Switch } from '@material-tailwind/react';
import { FC } from 'react';
import { ThemeSwitcherProps } from './interfaces';

const ThemeSwitch: FC<ThemeSwitcherProps> = ({
  currentTheme,
  toggleTheme,
}) => {
  return (
    <Switch
      id='custom-switch-component'
      ripple={true}
      className='h-full w-full checked:bg-primary-600'
      containerProps={{
        className: 'w-12 h-7',
      }}
      circleProps={{
        className: 'before:hidden left-0.5 border-none',
      }}
      onChange={toggleTheme}
      checked={currentTheme === 'darkTheme'}
    />
  );
};

export default ThemeSwitch;