import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { nbaApi } from '@/api';
import { TeamsProps } from '@/@types/pages/teams';
import TeamCard from '@/components/TeamCard/TeamCard';

const TeamsPage: NextPage<TeamsProps> = ({ response }) => {
  return (
    <>
      <Head>
        <title>{`NBA API - TeamsPage`}</title>
        <meta name='description' content='TeamsPage description' />
      </Head>

      <div className='flex flex-wrap gap-2 justify-center'>
        {response.map(team => (
          <Link key={team.id} href='/teams/[id]' as={`/teams/${team.id}`}>
            <TeamCard team={team} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default TeamsPage;

export const getStaticProps: GetStaticProps = async ctx => {
  const { data } = await nbaApi.get('/teams');

  return {
    props: {
      ...data,
    },
  };
};
