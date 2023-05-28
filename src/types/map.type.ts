import { Status, IResponseResult } from "./common/generic";
import { IPlayerMatch } from "./gamemodes";

export interface IMapResponse extends Status {
  name: string;
  tag: string;
  results: IResponseResult;
  data: IPlayerMatch[];
}

export interface ILocalMap {
  id: number;
  name: string;
  image: string;
}

export type Map = IPlayerMatch;
