import axios from "axios";
import { IPlayerResponse } from "../types/player.type";
import { IPlayerMatchCompetitiveResponse } from "../types/player-competitive.type";

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
): Promise<IPlayerMatchCompetitiveResponse> => {
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
): Promise<IPlayerMatchCompetitiveResponse> => {
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

const getPlayerMmr = async (region: string, puuid: string) => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_API_URL}/by-puuid/mmr/${region}/${puuid}`
  );
  return response.data;
};

const ApiService: ApiServiceMethods = {
  getAccount,
  getCompetitive,
  getCompetitiveMatch,
  getUnrated,
  getPlayerMmr,
};

export default ApiService;
