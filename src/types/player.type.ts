export interface IPlayerResponse {
  status: number;
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

type PlayerCard = {
  small: string;
  large: string;
  wide: string;
  id: string;
};
