import { useLocation } from "react-router-dom";
import { PlayerContext } from "../contexts/PlayerContext";
import ApiService from "../services/api.service";
import { useContext, useEffect, useState } from "react";
import { IPlayerMatch } from "../types/gamemodes";

const useGetUnrateds = () => {
  const [unrateds, setUnrateds] = useState<IPlayerMatch[] | null>(null);
  const { player } = useContext(PlayerContext);

  const getUnrateds = async () => {
    if (player) {
      try {
        const response: IPlayerMatch[] = await ApiService.getGameMode(
          player.region,
          player.name,
          player.tag,
          "unrated"
        );
        setUnrateds(response);
        return response;
      } catch (error) {
        console.log(error);
      }
    }

    return null;
  };

  useEffect(() => {
    getUnrateds();
  }, [player]);

  return { unrateds, setUnrateds, getUnrateds };
};

export default useGetUnrateds;
