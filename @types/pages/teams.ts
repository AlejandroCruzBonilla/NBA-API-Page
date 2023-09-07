export interface TeamsProps {
  get: string;
  parameters: Parameters[];
  errors: any[];
  results: number;
  response: Team[];
}

export interface Parameters {
  id?: number;
  name?: string;
  code?: string;
  league?: string;
  conference?: string;
  division?: string;
  search?: string;
}

export interface Team {
  id: number;
  name: string;
  nickname: string;
  code: string;
  city: string;
  logo: null | string;
  allStar: boolean;
  nbaFranchise: boolean;
  leagues: Leagues;
}

export interface Leagues {
  standard?: League;
  vegas?: League;
  utah?: League;
  sacramento?: League;
  africa?: League;
}

export interface League {
  conference: Conference | null;
  division: Division | null;
}

export enum Conference {
  California = 'California',
  East = 'East',
  Internatio = 'Internatio',
  Intl = 'Intl',
  Summer = 'summer',
  Utah = 'Utah',
  West = 'West',
}

export enum Division {
  Atlantic = 'Atlantic',
  Central = 'Central',
  East = 'East',
  Northwest = 'Northwest',
  Pacific = 'Pacific',
  Southeast = 'Southeast',
  Southwest = 'Southwest',
  West = 'West',
}
