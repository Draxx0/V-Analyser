import { IResponseResult, Status } from "./common/generic";

export interface IPlayerMatchResponse extends Status {
  name: string;
  tag: string;
  results: IResponseResult;
  data: IPlayerMatch[];
}

export interface IPlayerMatch {
  meta: {
    id: string;
    map: {
      id: string;
      name: string;
    };
    version: string;
    mode: string;
    started_at: string;
    season: {
      id: string;
      short: string;
    };
    region: string;
    cluster: string;
  };
  stats: {
    puuid: string;
    team: string;
    level: number;
    character: {
      id: string;
      name: string;
    };
    tier: number;
    score: number;
    kills: number;
    deaths: number;
    assists: number;
    shots: {
      head: number;
      body: number;
      leg: number;
    };
    damage: {
      made: number;
      received: number;
    };
  };
  teams: {
    red: number;
    blue: number;
  };
}

export interface IPlayerMatchDataWithRank extends IPlayerMatch {
  rank: string;
}

