import { FC, useContext, useEffect } from 'react';
import Head from 'next/head';

import { Inter } from 'next/font/google';
import { UIContext } from '@/context/ui';
import Navbar from '../Navbar/Navbar';

import { getTheme, setTheme } from '@/helpers';
import { MainLayoutProps } from './interfaces';
import styles from './MainLayout.module.css';

const inter = Inter({ subsets: ['latin'] });

const MainLayout: FC<MainLayoutProps> = ({
  children,
  seo: { title, description },
}) => {
  const { setDarkTheme, setLightTheme, setSystemTheme } = useContext(UIContext);

  useEffect(() => {
    const theme = getTheme();
    if (theme === 'darkTheme') {
      setTheme('darkTheme', setDarkTheme);
    } else if (theme === 'lightTheme') {
      setTheme('lightTheme', setLightTheme);
    } else if (theme === 'systemTheme') {
      setTheme('systemTheme', setSystemTheme);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{`NBA API - ${title}`}</title>
        <meta name='description' content={description} />
      </Head>

      <Navbar />

      <main
        className={`${styles.main} flex min-h-screen flex-col items-center justify-between p-4 ${inter.className}`}
      >
        {children}
      </main>
    </>
  );
};

export default MainLayout;
