import { FC } from 'react';
import { GameCardProps } from './interfaces';
import { Card, CardBody, CardHeader, Skeleton, Table } from '@nextui-org/react';
import Image from 'next/image';

const GameCard: FC<GameCardProps> = ({
  id,
  league,
  season,
  date,
  arena,
  teams,
  scores,
}) => (
  <Card className='w-80 h-auto'>
    <CardHeader className='flex justify-around'>
      {teams.home.logo ? (
        <Image
          src={teams.home.logo}
          alt={teams.home.name}
          width={80}
          height={80}
        />
      ) : (
        <Skeleton className='rounded-lg'>
          <div className='w-24 h-32 rounded-lg bg-default-300'></div>
        </Skeleton>
      )}

      {teams.visitors.logo ? (
        <Image
          src={teams.visitors.logo}
          alt={teams.visitors.name}
          width={80}
          height={80}
        />
      ) : (
        <Skeleton className='rounded-lg'>
          <div className='w-28 h-32 rounded-lg bg-default-300'></div>
        </Skeleton>
      )}
    </CardHeader>
    <CardBody className='leading-relaxed'>
      <div>
        <p>
          Teams:&nbsp;
          <strong>{teams.home.nickname}</strong> VS&nbsp;
          <strong>{teams.visitors.nickname}</strong>
        </p>
      </div>
      <div>
        <p>Season: {season}</p>
      </div>
      <div>
        <p>
          League: <span className='capitalize'>{league}</span>
        </p>
      </div>
      <div>
        <p>Date: {new Date(date.start).toDateString()}</p>
      </div>
      <div>
        <p>City: {arena.city}</p>
      </div>
      <div>
        <p>Arena: {arena.name}</p>
      </div>
      <div>
        Final Score: <strong>{scores.home.points}</strong> -&nbsp;
        <strong>{scores.visitors.points}</strong>
      </div>
    </CardBody>
  </Card>
);
export default GameCard;
