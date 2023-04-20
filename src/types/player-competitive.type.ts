export interface IPlayerMatchCompetitiveResponse {
  status: number;
  name: string;
  tag: string;
  results: IPlayerMatchCompetitiveResult;
  data: IPlayerMatchCompetitiveData[];
}

type IPlayerMatchCompetitiveResult = {
  total: number;
  returned: number;
  before: number;
  after: number;
};

type IPlayerMatchCompetitiveData = {
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
};
