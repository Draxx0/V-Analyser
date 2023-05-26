import axios from "axios";
import { IPlayerResponse } from "../types/player.type";
import { IPlayerMatch } from "../types/gamemodes";
import { IMapResponse } from "../types/map.type";
import { PlayerMmrData } from "../types/player.type";
import { IMap } from "../types/map.type";
import { INewsResponse } from "../types/news.type";
import { sliceMatchsReponse } from "../functions/sliceMatchsReponse";

interface ApiServiceMethods {
  [key: string]: (...args: any[]) => Promise<any>;
}

// ACCOUNT

const getAccount = async ( name: string,tag: string ): Promise<IPlayerResponse> => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_API_URL}/account/${name}/${tag}`
  );
  return response.data;
};

// NEWS

const getNews = async (): Promise<INewsResponse[]> => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_API_URL}/website/en-us`
  );
  return response.data;
};

// MATCH(S)

//! TYPED RESPONSE
const getCompetitiveMatch = async (matchId: string) => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_API_URL_V2}/match/${matchId}`
  );
  return response.data;
};

// MAP(S)

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

  const data = response.data.data.filter(
    (map: IMap) =>
      map.meta.mode !== "Custom Game" &&
      map.meta.mode !== "Spike Rush" &&
      map.meta.mode !== "Deathmatch" &&
      map.meta.mode !== "Snowball Fight" &&
      map.meta.mode !== "Replication" &&
      map.meta.mode !== "Escalation" &&
      map.meta.mode !== "Swiftplay"
  );

  return data;
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

// GAMEMODES  

const getCompetitive = async (
  region: string,
  name: string,
  tag: string
): Promise<IPlayerMatch[]> => {
  const response = await axios.get(
    `${
      import.meta.env.VITE_APP_API_URL
    }/lifetime/matches/${region}/${name}/${tag}?mode=competitive`
  );
  
  const slicedData = sliceMatchsReponse(response.data.data);

  return slicedData;
};


const getUnrated = async (
  region: string,
  name: string,
  tag: string
): Promise<IPlayerMatch[]> => {
  const response = await axios.get(
    `${
      import.meta.env.VITE_APP_API_URL
    }/lifetime/matches/${region}/${name}/${tag}?mode=unrated`
  );

  const slicedData = sliceMatchsReponse(response.data.data);

  return slicedData;
};

const getSwiftplay = async (
  region: string,
  name: string,
  tag: string
): Promise<IPlayerMatch[]> => {
  const response = await axios.get(
    `${
      import.meta.env.VITE_APP_API_URL
    }/lifetime/matches/${region}/${name}/${tag}?mode=swiftplay`
  );

  const slicedData = sliceMatchsReponse(response.data.data);

  return slicedData;
};

const ApiService: ApiServiceMethods = {
  getAccount,
  getNews,
  getCompetitive,
  getCompetitiveMatch,
  getUnrated,
  getSwiftplay,
  getPlayerMmr,
  getMap,
};

export default ApiService;
