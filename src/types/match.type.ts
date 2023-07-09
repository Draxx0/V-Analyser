import { Status } from "./common/generic"
import { PlayerCard } from "./player.type"

export type PlayerInMatch = {
  puuid: string,
  name: string,
  tag: string,
  team: string,
  level: number,
  character: string,
  currenttier: number,
  currenttier_patched: string,
  player_card: string,
  player_title: string,
  party_id: string,
  session_playtime: {
    minutes: number,
    seconds: number,
    milliseconds: number
  },
  assets: {
    card: Omit<PlayerCard, "id">,
    agent: {
      small: string,
      full: string,
      bust: string,
      killfeed: string
    }
  },
  behaviour: {
    afk_rounds: number,
    friendly_fire: {
      incoming: number,
      outgoing: number
    },
    rounds_in_spawn: number
  },
  platform: {
    type: string,
    os: {
      name: string,
      version: string
    }
  },
  ability_casts: {
    c_cast: number,
    q_cast: number,
    e_cast: number,
    x_cast: number
  },
  stats: {
    score: number,
    kills: number,
    deaths: number,
    assists: number,
    bodyshots: number,
    headshots: number,
    legshots: number
  },
  economy: {
    spent: {
      overall: number,
      average: number
    },
    loadout_value: {
      overall: number,
      average: number
    }
  },
  damage_made: number,
  damage_received: number
}

export interface IMatch extends Status {
 data: {
  metadata: {
    map: string,
    game_version: string,
    game_length: number,
    game_start: number,
    game_start_patched: string,
    rounds_played: number,
    mode: string,
    queue: string,
    season_id: string,
    platform: string,
    matchid: string,
    region: string,
    cluster: string
  },
  players: {
    all_players: PlayerInMatch[]
  },
  rounds: [
    {
      winning_team: string,
      end_type: string,
      bomb_planted: boolean,
      bomb_defused: boolean,
      plant_events: {
        plant_location: {
          x: number,
          y: number
        },
        planted_by: {
          puuid: string,
          display_name: string,
          team: string
        },
        plant_site: string,
        plant_time_in_round: number,
        player_locations_on_plant: [
          {
            player_puuid: string,
            player_display_name: string,
            player_team: string,
            location: {
              x: number,
              y: number
            },
            view_radians: number
          }
        ]
      },
      defuse_events: {
        defuse_location: {
          x: number,
          y: number
        },
        defused_by: {
          puuid: string,
          display_name: string,
          team: string
        },
        defuse_time_in_round: number,
        player_locations_on_defuse: [
          {
            player_puuid: string,
            player_display_name: string,
            player_team: string,
            location: {
              x: number,
              y: number
            },
            view_radians: number
          }
        ]
      },
      player_stats: [
        {
          ability_casts: {
            c_casts: number,
            q_casts: number,
            e_casts: number,
            x_casts: number
          },
          player_puuid: string,
          player_display_name: string,
          player_team: string,
          damage_events: [],
          damage: number,
          bodyshots: number,
          headshots: number,
          legshots: number,
          kill_events: [],
          kills: number,
          score: number,
          economy: {
            loadout_value: number,
            weapon: {
              id: string,
              name: string,
              assets: {
                display_icon: string,
                killfeed_icon: string
              }
            },
            armor: {
              id: string,
              name: string,
              assets: {
                display_icon: string
              }
            },
            remaining: number,
            spent: number
          },
          was_afk: boolean,
          was_penalized: boolean,
          stayed_in_spawn: boolean
        }
      ]
    }
  ]
}
}