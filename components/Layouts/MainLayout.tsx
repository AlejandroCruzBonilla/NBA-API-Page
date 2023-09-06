import { FC, useContext } from 'react';
import Head from 'next/head';

import { Inter } from 'next/font/google';

import Nav from '../Nav/Nav';

import { MainLayoutProps } from './interfaces';
import styles from './MainLayout.module.css';

const inter = Inter({ subsets: ['latin'] });

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Nav />
      <main
        className={`${styles.main}  flex min-h-screen flex-col items-center justify-between p-4 ${inter.className}`}
      >
        {children}
      </main>
    </>
  );
};

export default MainLayout;
