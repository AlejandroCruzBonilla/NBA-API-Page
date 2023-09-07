import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { UIProvider } from '@/context/ui';
import MainLayout from '@/components/Layouts/MainLayout';
import '@/styles/globals.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {

	const { asPath } = useRouter();

	if(typeof document != undefined &&  asPath === '/'){
		// document.body.classList.add('bg-gray-100');
		// document.body.classList.add('dark:bg-gray-800');
	}

	useEffect(()=>{
		if(typeof document != undefined &&  asPath === '/'){
			document.body.classList.add('overflow-hidden');
		}
		else {
			document.body.classList.remove('overflow-hidden');
		}
	},[asPath])

  return (
    <NextUIProvider>
      <UIProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </UIProvider>
    </NextUIProvider>
  );
}
