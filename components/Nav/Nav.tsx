import { useContext, useState } from 'react';
import { UIContext } from '@/context/ui';
import NavLink from '../NavLink/NavLink';
// import styles from './Navbar.module.css';

import {
  Button,
  Navbar,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';

import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';

const items = [
  { to: '/', text: 'Home' },
  { to: '/games', text: 'Games' },
  { to: '/teams', text: 'Teams' },
  { to: '/players', text: 'Players' },
];

const Nav = () => {
  const { setTheme, currentTheme, setNavMenuOpen } = useContext(UIContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
			maxWidth='2xl'
    >
      <NavbarContent>
        {items.map(({ to, text }, index) => (
          <NavbarItem key={`${index}-${to}`}>
            <NavLink className='text-xl' text={text} href={to} aria-current='page' />
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <ThemeSwitch setTheme={setTheme} currentTheme={currentTheme} />
        </NavbarItem>
        <NavbarMenuToggle
          className='nav__menu sm:hidden'
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarMenu>
        {items.map(({ to, text }, index) => (
          <NavbarItem key={`${index}-${to}`}>
            <NavLink className='text-2xl' text={text} href={to} aria-current='page' />
          </NavbarItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
