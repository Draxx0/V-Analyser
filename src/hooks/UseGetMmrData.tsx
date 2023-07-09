import ApiService from "../services/api.service"
import { useEffect, useState, useContext } from "react"
import { PlayerContext } from "../contexts/PlayerContext"
import { PlayerMmrData } from "../types/player.type"

const UseGetMmr = () => {
 const [playerMmr, setPlayerMmr] = useState<PlayerMmrData | null>(null)
 const { player } = useContext(PlayerContext)

 const getMmrData = async (): Promise<void> => {
  if (player) {
   try {
    const response: PlayerMmrData = await ApiService.getPlayerMmr(
     player.region,
     player.name,
     player.tag
    );
    setPlayerMmr(response);
   } catch (error) {
    console.log(error);
   }
  }
 };

 useEffect(() => {
  getMmrData()
 }, [player])


 return { playerMmr, setPlayerMmr, getMmrData }
}

export default UseGetMmr