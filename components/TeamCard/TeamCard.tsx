import { FC } from 'react';
import { TeamCardProps } from './interfaces';
import { Card, CardBody, CardHeader, Skeleton, Table } from '@nextui-org/react';
import Image from 'next/image';

const TeamCard: FC<TeamCardProps> = ({ team: { id, logo, name, city } }) => (
  <Card className='w-80 h-auto' isPressable shadow="sm">
    <CardHeader className='h-40'>
      {logo ? (
        <div className='w-full h-full flex justify-center'>
          <Image
            src={logo}
            alt={name}
            width={120}
            height={0}
            className='w-auto h-auto'
          />
        </div>
      ) : (
        <Skeleton className='rounded-lg'>
          <div className='w-80 h-36 rounded-lg bg-default-300'></div>
        </Skeleton>
      )}
    </CardHeader>
    <CardBody className='leading-relaxed'>
      <div>
        <p>Id: #{id}</p>
        <p>
          Teams:&nbsp;
          <strong>{name}</strong>
        </p>
      </div>
      <div>
        <p>
          City:&nbsp;
          <strong>{city}</strong>
        </p>
      </div>
    </CardBody>
  </Card>
);
export default TeamCard;
