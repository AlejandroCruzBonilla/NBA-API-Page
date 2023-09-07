import { Player } from './players';

export interface TeamResponse {
	get:        string;
	parameters: Parameters;
	errors:     any[];
	results:    number;
	response:   Team[];
}

export interface TeamProps {
	team: Team;
	players: Player[];	
}


export interface Parameters {
	id?: string;
	name?: string;
	code?: string;
	league?: string;
	conference?: string;
	division?: string;
	search?: string;
}

export interface Team {
	id:           number;
	name:         string;
	nickname:     string;
	code:         string;
	city:         string;
	logo:         string;
	allStar:      boolean;
	nbaFranchise: boolean;
	leagues:      Leagues;
}

export interface Leagues {
	standard?:   League;
	vegas?:      League;
	utah?:       League;
	sacramento?: League;
}

export interface League {
	conference: string;
	division:   null | string;
}
