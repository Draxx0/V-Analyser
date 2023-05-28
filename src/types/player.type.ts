import { Status } from "./common/generic";

// PLAYER

export interface IPlayerResponse extends Status{
  data: PlayerData;
  last_update: string;
  last_update_raw: number;
}

export type PlayerData = {
  puuid: string;
  region: string;
  account_level: number;
  name: string;
  tag: string;
  card: PlayerCard;
};

export type PlayerCard = {
  small: string;
  large: string;
  wide: string;
  id: string;
};

// PLAYER MMR

export interface IPlayerMmrResponse extends Status{
  data: PlayerMmrData;
}

export type PlayerMmrData = {
  name: string;
  tag: string;
  puuid: string;
  current_data: {
    currenttier: number;
    currenttierpatched: string;
    images: PlayerMmrImages;
    ranking_in_tier: number;
    mmr_change_to_last_game: number;
    elo: number;
    games_needed_for_rating: number;
    old: boolean;
  };
  highest_rank: {
    old: boolean;
    tier: number;
    patched_tier: string;
    season: string;
  };
};

type PlayerMmrImages = {
  small: string;
  large: string;
  triangle_down: string;
  triangle_up: string;
};

