import Image from 'next/image';

import Head from 'next/head';
import { Suspense, use, useEffect, useState } from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>{`NBA API - HomePage`}</title>
        <meta name='description' content='HomePage description' />
      </Head>

      <Image
        src='/backgroundHome.jpg'
        alt='nba'
        priority
        quality='100'
        layout='fill'
        style={{
          objectFit: 'cover',
        }}
      />
    </>
  );
}
