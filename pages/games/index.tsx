import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { nbaApi } from '@/api';
import { GamesProps } from '@/@types/pages/games';
import GameCard from '@/components/GameCard/GameCard';

const GamesPage: NextPage<GamesProps> = ({
  response,
}) => {
  return (
    <>
      <Head>
        <title>{`NBA API - GamesPage`}</title>
        <meta name='description' content='GamesPage description' />
      </Head>

      <div className='flex flex-wrap gap-2 justify-center'>
        {response.map(({ id, league, season, date, arena, teams, scores }) => (
          <GameCard
            key={id}
            id={id}
            league={league}
            season={season}
            date={date}
            arena={arena}
            teams={teams}
            scores={scores}
          />
        ))}
      </div>
    </>
  );
};

export default GamesPage;

export const getStaticProps: GetStaticProps = async ctx => {
  const { data } = await nbaApi.get('/games', {
    params: { season: '2022', team: '8' },
  });

  return {
    props: {
      ...data,
    },
  };
};
