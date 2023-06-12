import axios from "axios";
import { IPlayerResponse } from "../types/player.type";
import { Gamemode, IPlayerMatch } from "../types/gamemodes";
import { IMapResponse } from "../types/map.type";
import { PlayerMmrData } from "../types/player.type";
import { Map } from "../types/map.type";
import { INewsResponse } from "../types/news.type";
import { sliceMatchsReponse } from "../functions/sliceMatchsReponse";
import { IMatch } from "../types/match.type";
import { modelingMmrData } from "../functions/modelingMmrData";

// ACCOUNT

const getAccount = async (
  name: string,
  tag: string
): Promise<IPlayerResponse> => {
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

const getCompetitiveMatch = async (matchId: string): Promise<IMatch> => {
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
    (map: Map) =>
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
  const MmrData = modelingMmrData(data);
  return MmrData;
};

// GAMEMODES

const getGameMode = async (
  region: string,
  name: string,
  tag: string,
  gamemode: Gamemode
): Promise<IPlayerMatch[]> => {
  const response = await axios.get(
    `${
      import.meta.env.VITE_APP_API_URL
    }/lifetime/matches/${region}/${name}/${tag}?mode=${gamemode}`
  );

  const slicedData = sliceMatchsReponse(response.data.data);

  return slicedData;
};

const ApiService = {
  getAccount,
  getNews,
  getGameMode,
  getCompetitiveMatch,
  getPlayerMmr,
  getMap,
};

export default ApiService;
