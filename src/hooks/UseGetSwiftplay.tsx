import ApiService from "../services/api.service"
import { useContext } from "react"
import { PlayerContext } from "../contexts/PlayerContext"
import { useQuery } from "react-query"

const useGetSwiftplay = () => {
 const { player } = useContext(PlayerContext)

 const query = useQuery(["swifplay"], async () => {
  if (player) {
   return await ApiService.getGameMode(player.region, player.name, player.tag, "swiftplay")
  }
 })

 return {
  ...query
 }
}

export default useGetSwiftplay