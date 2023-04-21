export interface IPlayerMmrResponse {
  status: number;
  data: PlayerMmrData;
}

export type PlayerMmrData = {
  currenttier: number;
  currenttierpatched: string;
  images: PlayerMmrImages;
  ranking_in_tier: number;
  mmr_change_to_last_game: number;
  elo: number;
  name: string;
  tag: string;
  old: boolean;
};

type PlayerMmrImages = {
  small: string;
  large: string;
  triangle_down: string;
  triangle_up: string;
};
