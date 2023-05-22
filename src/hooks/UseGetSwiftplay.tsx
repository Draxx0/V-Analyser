import ApiService from "../services/api.service"
import { useEffect, useState, useContext } from "react"
import { PlayerContext } from "../contexts/PlayerContext"

const useGetSwiftplay = () => {
 const [swiftplays, setSwiftplays] = useState<any[]>([])
 const { player } = useContext(PlayerContext)

 const getSwiftplay = async () => {
  if (player) {
   try {
    const response = await ApiService.getSwiftplay(player.region, player.name, player.tag)

    const matchResults = response.data.map((match: any) => {
     console.log("MATCH", match)
     const blueScore = match.teams.blue
     const redScore = match.teams.red
     const teamScores = { blue: blueScore, red: redScore }

     return { matchData: match, teamScores }
    })

    setSwiftplays(response.data)

    return matchResults
   } catch (error) {
    console.log(error)
   }
  }

  return null
 }

 useEffect(() => {
  getSwiftplay()
 }, [player])

 console.log("SWIFTPLAY", swiftplays)

 return { swiftplays, setSwiftplays, getSwiftplay }
}

export default useGetSwiftplay