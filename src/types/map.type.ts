export interface IMapResponse {
  status: number;
  name: string;
  tag: string;
  results: {
    total: number;
    returned: number;
    before: number;
    after: number;
  };
  data: [
    {
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
          head: number;
          body: number;
          leg: number;
        };
      };
      teams: {
        red: number;
        blue: number;
      };
    }
  ];
}

export interface ILocalMap {
  id: number;
  name: string;
  image: string;
}

export interface IMap {
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
      head: number;
      body: number;
      leg: number;
    };
  };
  teams: {
    red: number;
    blue: number;
  };
}
