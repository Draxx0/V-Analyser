import ApiService from "../services/api.service"
import { useContext } from "react"
import { PlayerContext } from "../contexts/PlayerContext"
import { useQuery } from "react-query"

const useGetMmrData = () => {
 const { player } = useContext(PlayerContext)

 const query = useQuery(["mmr"], async () => {
  if (player) {
   return await ApiService.getPlayerMmr(player.region, player.name, player.tag)
  }
 })

 return {
  ...query
 }
}

export default useGetMmrData