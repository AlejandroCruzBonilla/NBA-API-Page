import { FC } from 'react';
import Link from 'next/link';
import { NavLinkProps } from './interfaces';

const NavLink: FC<NavLinkProps> = ({ text, href, className, asPath }) => {
  return (
    <Link href={href} legacyBehavior>
      <a
        className={`
					block w-full text-center
					${className}
					${
            asPath === href
              ? 'font-bold primary--font--color'
              : 'primary--font--color--hover hover:font-bold'
          }`}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavLink;
