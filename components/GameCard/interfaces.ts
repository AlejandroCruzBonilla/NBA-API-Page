import { Arena, DateClass, Scores, Teams } from '@/@types/pages/games';

export interface GameCardProps {
  id: number;
  league: string;
  season: number;
  date: DateClass;
  arena: Arena;
  teams: Teams;
  scores: Scores;
}
