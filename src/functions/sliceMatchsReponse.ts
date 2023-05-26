import { IPlayerMatch } from "../types/gamemodes";

export const sliceMatchsReponse = (matchs: IPlayerMatch[]): IPlayerMatch[] => {
 if (matchs.length >= 6) return matchs.slice(0, 6);

 return matchs;
};
