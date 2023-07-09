import ApiService from "../services/api.service"
import { useEffect, useState, useContext } from "react"
import { PlayerContext } from "../contexts/PlayerContext"
import { IPlayerMatch } from "../types/gamemodes"

const useGetSwiftplay = () => {
 const [swiftplays, setSwiftplays] = useState<IPlayerMatch[]>([])
 const { player } = useContext(PlayerContext)

 const getSwiftplay = async () => {
  if (player) {
   try {
    const response: IPlayerMatch[] = await ApiService.getGameMode(player.region, player.name, player.tag, "swiftplay")
    setSwiftplays(response)
    return response
   } catch (error) {
    console.log(error)
   }
  }

  return null
 }

 useEffect(() => {
  getSwiftplay()
 }, [player])


 return { swiftplays, setSwiftplays, getSwiftplay }
}

export default useGetSwiftplay