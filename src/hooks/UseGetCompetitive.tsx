import ApiService from "../services/api.service"
import { useEffect, useState, useContext } from "react"
import { PlayerContext } from "../contexts/PlayerContext"
import { IPlayerMatch, IPlayerMatchDataWithRank } from "../types/gamemodes"
import { IMatch, PlayerInMatch } from "../types/match.type"

const useGetCompetitive = () => {
 const [competitives, setCompetitives] = useState<IPlayerMatchDataWithRank[] | null>([])
 const { player } = useContext(PlayerContext)

 const getRankAtMatch = async (match: IPlayerMatch): Promise<string> => {
  try {
   const response: IMatch = await ApiService.getCompetitiveMatch(match.meta.id);
   const playerMatch = response.data.players.all_players.find(
    (playerInMatch: PlayerInMatch) => playerInMatch.name === player?.name
   );
   if (!playerMatch) throw new Error("Player not found in match")
   return playerMatch.currenttier_patched;
  } catch (error) {
   console.log(error);
   return "";
  }
 };


 const getCompetitive = async (): Promise<IPlayerMatchDataWithRank[] | null> => {
  if (player) {
   try {
    const response: IPlayerMatch[] = await ApiService.getCompetitive(player.region, player.name, player.tag)

    const updatedPlayerCompetitive: IPlayerMatchDataWithRank[] = await Promise.all(
     response.map(async (match: IPlayerMatch) => {
      const response = await getRankAtMatch(match);
      return {
       ...match,
       rank: response,
      };
     })
    );

    setCompetitives(updatedPlayerCompetitive);

    return updatedPlayerCompetitive
   } catch (error) {
    console.log(error)
   }
  }

  return null
 }

 useEffect(() => {
  getCompetitive()
 }, [player])


 return { competitives, setCompetitives, getCompetitive }
}

export default useGetCompetitive