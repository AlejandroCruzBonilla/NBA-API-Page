import Image from 'next/image';
import MainLayout from '@/components/Layouts/MainLayout';


export default function Home() {
  return (
    <MainLayout seo={{title:"HomePage", description:"HomePage description"}}
     
    >
      {/* <Image
        src='/vercel.svg'
        alt='Vercel Logo'
        className='dark:invert'
        width={100}
        height={24}
        priority
      /> */}

			<h1 className='btn btn--primary'>HomePage</h1>
    </MainLayout>
  );
}
