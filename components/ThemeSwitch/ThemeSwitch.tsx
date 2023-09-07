import { FC, useEffect, useState, useContext } from 'react';
import { UIContext } from '@/context/ui';

import { Switch } from '@nextui-org/react';
import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';
import { ThemeSwitchProps } from './interfaces';

const ThemeSwitch: FC<ThemeSwitchProps> = ({ setTheme, currentTheme }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) setTheme('darkTheme');
    else if (!checked && currentTheme != 'systemTheme') setTheme('lightTheme');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  useEffect(() => {
    if (currentTheme === 'darkTheme') {
      setChecked(true);
    }
  }, [currentTheme]);

  return (
    <Switch
      id='theme-switch-component'
      className='h-full w-full checked:bg-primary-600'
      isSelected={checked}
      thumbIcon={({ isSelected, className }) => {
        return isSelected ? (
          <MoonIcon className={className} />
        ) : (
          <SunIcon className={className} />
        );
      }}
      onValueChange={setChecked}
    />
  );
};

export default ThemeSwitch;
