export interface GamesProps {
  get: string;
  parameters: Parameters;
  errors: any[];
  results: number;
  response: Response[];
}

export interface Parameters {
  id?: number;
  live?: string;
  date?: string;
  league?: string;
  season?: string;
  team?: string;
  h2h?: string;
}

export interface Response {
  id: number;
  league: string;
  season: number;
  date: DateClass;
  stage: number;
  status: Status;
  periods: Periods;
  arena: Arena;
  teams: Teams;
  scores: Scores;
  officials: string[];
  timesTied: number;
  leadChanges: number;
  nugget: null;
}

export interface Arena {
  name: string;
  city: string;
  state: string;
  country: string;
}

export interface DateClass {
  start: string;
  end: string;
  duration: string;
}

export interface Periods {
  current: number;
  total: number;
  endOfPeriod: boolean;
}

export interface Scores {
  visitors: ScoresHome;
  home: ScoresHome;
}

export interface ScoresHome {
  win: number;
  loss: number;
  series: Series;
  linescore: string[];
  points: number;
}

export interface Series {
  win: number;
  loss: number;
}

export interface Status {
  clock: null;
  halftime: boolean;
  short: number;
  long: string;
}

export interface Teams {
  visitors: TeamsHome;
  home: TeamsHome;
}

export interface TeamsHome {
  id: number;
  name: string;
  nickname: string;
  code: string;
  logo: string;
}
