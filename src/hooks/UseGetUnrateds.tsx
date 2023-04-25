import { useLocation } from "react-router-dom";
import { PlayerContext } from "../contexts/PlayerContext";
import ApiService from "../services/api.service";
import { IPlayerMatchData } from "../types/player-competitive.type";
import { useContext, useEffect, useState } from "react";

const useGetUnrateds = () => {
  const [unrateds, setUnrateds] = useState<IPlayerMatchData[] | null>(null);
  const { player } = useContext(PlayerContext);
  const location = useLocation();

  const getUnrateds = async () => {
    if (player && location.pathname !== "/dashboard/competitive") {
      try {
        const response = await ApiService.getUnrated(
          player.region,
          player.name,
          player.tag
        );

        const matchResults = response.data.map((match: IPlayerMatchData) => {
          const blueScore = match.teams.blue;
          const redScore = match.teams.red;
          const teamScores = { blue: blueScore, red: redScore };

          return { matchData: match, teamScores };
        });

        setUnrateds(matchResults);

        return matchResults;
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
