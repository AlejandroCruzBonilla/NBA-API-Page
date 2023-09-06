import { ChangeEvent, useContext } from 'react';
import { UIContext } from '@/context/ui';
import NavLink from '../NavLink/NavLink';
import styles from './Navbar.module.css';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import { setTheme } from '@/helpers';

const Navbar = () => {
  const { setDarkTheme, setLightTheme, currentTheme } = useContext(UIContext);

  const toggleTheme = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setTheme('darkTheme', setDarkTheme);
    } else {
      setTheme('lightTheme', setLightTheme);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.wrapper} base--primary`}>
        <div>
          <NavLink text='Home' href='/' />
          <NavLink text='Games' href='/games' />
          <NavLink text='Teams' href='/teams' />
          <NavLink text='Players' href='/players' />
        </div>
        <div>
          <ThemeSwitch currentTheme={currentTheme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
