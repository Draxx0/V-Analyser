import ApiService from "../services/api.service"
import { useEffect, useState, useContext } from "react"
import { PlayerContext } from "../contexts/PlayerContext"
import { IPlayerMatch } from "../types/gamemodes"

const UseGetMatch = () => {
 const [competitives, setCompetitives] = useState<IPlayerMatch[]>([])
 const { player } = useContext(PlayerContext)

 const getCompetitive = async () => {
  if (player) {
   try {
    const response = await ApiService.getCompetitive(player.region, player.name, player.tag)

    setCompetitives(response.data)

    return response.data
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

export default UseGetMatch