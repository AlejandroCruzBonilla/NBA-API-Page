import Image from 'next/image';

import Head from 'next/head';

export default function Home() {
  return (
    <>
      {/* <Image
        src='/vercel.svg'
        alt='Vercel Logo'
        className='dark:invert'
        width={100}
        height={24}
        priority
      /> */}


      <Head>
        <title>{`NBA API - HomePage`}</title>
        <meta name='description' content='HomePage description' />
      </Head>

      <h1 className='btn btn--primary'>HomePage</h1>
    </>
  );
}
