import { useContext, useState } from 'react';
import { UIContext } from '@/context/ui';
import NavLink from '../NavLink/NavLink';

import {

  Navbar,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
} from '@nextui-org/react';

import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import Image from 'next/image';

const items = [
  { to: '/', text: 'Home' },
  { to: '/teams', text: 'Teams' },
  { to: '/games', text: 'Games' },
];

const Nav = () => {
  const { setTheme, currentTheme } = useContext(UIContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth='xl'
			isBlurred={false}
    >
      <NavbarBrand>
        <Image
          src='/logo.png'
          alt='logo'
          width={100}
          height={0}
          priority
          className='h-auto'
        />
      </NavbarBrand>
      <NavbarContent className='hidden md:flex' justify='center'>
        {items.map(({ to, text }, index) => (
          <NavbarItem key={`${index}-${to}`}>
            <NavLink
              className='text-xl'
              text={text}
              href={to}
              aria-current='page'
            />
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
          <NavbarItem key={`${index}-${to}`} onClick={()=>setIsMenuOpen(false)}>
            <NavLink
              className='text-2xl'
              text={text}
              href={to}
              aria-current='page'
            />
          </NavbarItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
