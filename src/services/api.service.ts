import axios from "axios";
import { IPlayerResponse } from "../types/player.type";
import { IPlayerMatchResponse } from "../types/player-competitive.type";
import { IMapResponse } from "../types/map.type";
import { PlayerMmrData } from "../types/playerMmr.type";

interface ApiServiceMethods {
  [key: string]: (...args: any[]) => Promise<any>;
}

const getAccount = async (
  name: string,
  tag: string
): Promise<IPlayerResponse> => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_API_URL}/account/${name}/${tag}`
  );
  return response.data;
};

const getCompetitive = async (
  region: string,
  name: string,
  tag: string
): Promise<IPlayerMatchResponse> => {
  const response = await axios.get(
    `${
      import.meta.env.VITE_APP_API_URL
    }/lifetime/matches/${region}/${name}/${tag}?mode=competitive`
  );
  const slicedData =
    response.data.data.length >= 6 && response.data.data.slice(0, 6);
  response.data.data = slicedData;
  return response.data;
};

const getCompetitiveMatch = async (matchId: string) => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_API_URL_V2}/match/${matchId}`
  );
  return response.data;
};

const getUnrated = async (
  region: string,
  name: string,
  tag: string
): Promise<IPlayerMatchResponse> => {
  const response = await axios.get(
    `${
      import.meta.env.VITE_APP_API_URL
    }/lifetime/matches/${region}/${name}/${tag}?mode=unrated`
  );
  const slicedData =
    response.data.data.length >= 6
      ? response.data.data.slice(0, 6)
      : response.data.data;
  response.data.data = slicedData;
  return response.data;
};

const getMap = async (
  region: string,
  name: string,
  tag: string,
  map: string
): Promise<IMapResponse> => {
  const response = await axios.get(
    `${
      import.meta.env.VITE_APP_API_URL
    }/lifetime/matches/${region}/${name}/${tag}?map=${map}`
  );
  return response.data;
};

const getPlayerMmr = async (region: string, name: string, tag: string) => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_API_URL_V2}/mmr/${region}/${name}/${tag}}`
  );

  const { data } = response.data;

  const MmrData: PlayerMmrData = {
    name: data.name,
    tag: data.tag,
    puuid: data.puuid,
    current_data: {
      currenttier: data.current_data.currenttier,
      currenttierpatched: data.current_data.currenttierpatched,
      images: data.current_data.images,
      ranking_in_tier: data.current_data.ranking_in_tier,
      mmr_change_to_last_game: data.current_data.mmr_change_to_last_game,
      elo: data.current_data.elo,
      games_needed_for_rating: data.current_data.games_needed_for_rating,
      old: data.current_data.old,
    },
    highest_rank: {
      old: data.highest_rank.old,
      tier: data.highest_rank.tier,
      patched_tier: data.highest_rank.patched_tier,
      season: data.highest_rank.season,
    },
  };
  return MmrData;
};

const ApiService: ApiServiceMethods = {
  getAccount,
  getCompetitive,
  getCompetitiveMatch,
  getUnrated,
  getPlayerMmr,
  getMap,
};

export default ApiService;
