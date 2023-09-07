import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import {
  Card,
  CardBody,
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableCell,
  TableRow,
  Skeleton,
} from '@nextui-org/react';

import { nbaApi } from '@/api';

import { TeamProps, TeamResponse } from '@/@types/pages/team';
import { PlayersResponse } from '@/@types/pages/players';
import { TeamsProps } from '@/@types/pages/teams';
import Image from 'next/image';
import Header1 from '@/components/Headers/Header1';

const Team: NextPage<TeamProps> = ({ team, players }) => {
  return (
    <>
      <Head>
        <title>{`NBA API - ${team.name}`}</title>
        <meta name='description' content={`${team.name} description`} />
      </Head>
      <Header1>{team.name}</Header1>
      <Card
        isBlurred
        className='border-none bg-background/60 dark:bg-default-100/50 w-full max-w-screen-xl'
        shadow='sm'
      >
        <CardBody>
          <div className='items-center justify-center grid grid-cols-12 grid-rows-2 lg:grid-rows-1'>
            <div className='col-span-12 lg:col-span-4'>
              {team.logo ? (
                <Image
                  src={team.logo}
                  alt={team.name}
                  width={300}
                  height={0}
                  className='mx-auto '
                />
              ) : (
                <Skeleton className='rounded-lg'>
                  <div className='w-80 h-36 rounded-lg bg-default-300'></div>
                </Skeleton>
              )}
            </div>
            <div className='col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-6 leading-8 md:leading-10'>
              <div className='col-span-1 md:col-span-2 md:col-start-2'>
                <p>
                  <strong>Id</strong>: #{team.id}
                </p>
                <p>
                  <strong>Name</strong>: {team.name}
                </p>
                <p>
                  <strong>Nickname</strong>: {team.nickname}
                </p>
                <p>
                  <strong>City</strong>: {team.city}
                </p>
              </div>

              <div className='col-span-1 md:col-span-2'>
                <p>
                  <strong>Leagues</strong>:
                </p>
                <p>
                  Sacramento: {team.leagues.sacramento?.conference} -{' '}
                  {team.leagues.sacramento?.division}
                </p>
                <p>
                  Standard: {team.leagues.standard?.conference} -{' '}
                  {team.leagues.standard?.division}
                </p>
                <p>
                  Utah: {team.leagues.utah?.conference} -{' '}
                  {team.leagues.utah?.division}
                </p>
                <p>
                  Vegas: {team.leagues.vegas?.conference} -{' '}
                  {team.leagues.vegas?.division}
                </p>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      <h2>Players</h2>

      <Table
        className='w-full max-w-screen-xl max-h-[600px] md:max-h-fit'
        isHeaderSticky
        aria-label={`Table of ${team.name} players`}
      >
        <TableHeader>
          <TableColumn>Id</TableColumn>
          <TableColumn>First Name</TableColumn>
          <TableColumn>Last Name</TableColumn>
          <TableColumn>Country</TableColumn>
          <TableColumn>Birth</TableColumn>
          <TableColumn>Height (mts)</TableColumn>
          <TableColumn>Weight (kgs)</TableColumn>
        </TableHeader>
        <TableBody>
          {players.map(({ id, firstname, lastname, birth, height, weight }) => (
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>{firstname}</TableCell>
              <TableCell>{lastname}</TableCell>
              <TableCell>{birth.country}</TableCell>
              <TableCell>{birth.date}</TableCell>
              <TableCell>{height.meters}</TableCell>
              <TableCell>{weight.kilograms}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Team;

export const getStaticPaths: GetStaticPaths = async ctx => {
  const { data } = await nbaApi.get<TeamsProps>('/teams');

  return {
    paths: data.response.map(({ id }) => ({ params: { id: id.toString() } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const {
    data: { response },
  } = await nbaApi.get<TeamResponse>(`/teams`, {
    params: { id },
  });

  const [team] = response;

  const {
    data: { response: players },
  } = await nbaApi.get<PlayersResponse>(`/players`, {
    params: { team: id, season: '2022' },
  });

  return {
    props: {
      team,
      players,
    },
  };
};
