export interface IPlayerMatchResponse {
  status: number;
  name: string;
  tag: string;
  results: IPlayerMatchResult;
  data: IPlayerMatchData[];
}

type IPlayerMatchResult = {
  total: number;
  returned: number;
  before: number;
  after: number;
};

export type IPlayerMatchData = {
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
  matchData: IPlayerMatchData;
  rank?: string;
};

export type IPlayerMatchDataWithRank = IPlayerMatchData & {
  rank: string;
};

export type IPlayerMatchDataWithRankAndTeamScore = IPlayerMatchDataWithRank & {
  teamScores: {
    red: number;
    blue: number;
  };
};
