export interface PlayersResponse {
	get:        string;
	parameters: Parameters;
	errors:     any[];
	results:    number;
	response:   Player[];
}

export interface Parameters {
	team:   string;
	season: string;
}

export interface Player {
	id:          number;
	firstname:   string;
	lastname:    string;
	birth:       Birth;
	nba:         Nba;
	height:      Height;
	weight:      Weight;
	college:     null | string;
	affiliation: null | string;
	leagues:     Leagues;
}

export interface Birth {
	date:    null | string;
	country: Country | null;
}

export enum Country {
	DominicanRepublic = "Dominican Republic",
	Italy = "Italy",
	Usa = "USA",
}

export interface Height {
	feets:  null | string;
	inches: null | string;
	meters: null | string;
}

export interface Leagues {
	standard:    Africa;
	vegas?:      Africa;
	sacramento?: Africa;
	utah?:       Africa;
	africa?:     Africa;
}

export interface Africa {
	jersey: number | null;
	active: boolean;
	pos:    null | string;
}

export interface Nba {
	start: number;
	pro:   number;
}

export interface Weight {
	pounds:    null | string;
	kilograms: null | string;
}
