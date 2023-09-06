import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { UIProvider } from '@/context/ui';
import MainLayout from '@/components/Layouts/MainLayout';

export default function App({ Component, pageProps }: AppProps) {
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
