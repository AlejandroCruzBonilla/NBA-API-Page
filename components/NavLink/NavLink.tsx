import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { NavLinkProps } from './interfaces';
import styles from './NavLink.module.css';

const NavLink: FC<NavLinkProps> = ({ text, href }) => {
  const { asPath } = useRouter();
  return (
    <Link href={href} legacyBehavior>
      <a
        className={
          asPath === href
            ? 'font-bold primary--font--color'
            : 'primary--font--color--hover hover:font-bold'
        }
      >
        {text}
      </a>
    </Link>
  );
};

export default NavLink;
