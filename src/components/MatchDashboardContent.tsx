import { PlayerContext } from "../contexts/PlayerContext";
import { useContext, useEffect, useState } from "react";
import LastMatch from "./LastMatch";
import LastMatches from "./LastMatches";
import Rating from "./Rating";
import Loading from "./common/Loading";
import { useLocation } from "react-router-dom";
import HighestRating from "./HighestRating";
import { IPlayerMatch, IPlayerMatchDataWithRank } from "../types/gamemodes";
import ApiService from "../services/api.service";
import useGetCompetitive from "../hooks/UseGetCompetitive";

interface Props {
  lastMatch: IPlayerMatch;
  setLastMatch: React.Dispatch<React.SetStateAction<IPlayerMatch>>;
}

const MatchDashboardContent = () => {
  const location = useLocation();

  const { getMmrData, player, playerMmr } =
    useContext(PlayerContext);

  const [lastMatch, setLastMatch] = useState<IPlayerMatch | IPlayerMatchDataWithRank | null>(null);

  useEffect(() => {
    getMmrData();
  }, [player]);

  // useEffect(() => {
  //   if (competitives) {
  //     setLastMatch(competitives[0]);
  //     console.log("LOOP")
  //   }
  // }, [competitives]);

  return (
    <div className="grid grid-cols-6 mt-[50px] pb-[100px] gap-5">
      {playerMmr ? (
        <>
          <div className="col-start-1 col-end-5 row-start-1 row-end-1 block h-full xl:col-start-1 xl:col-end-7">
            <LastMatch lastMatch={lastMatch} />
          </div>
          <div className="col-start-5 col-end-7 row-start-1 row-end-1 block h-full xl:row-start-2 xl:row-end-2 xl:col-start-1 xl:overflow-hidden xl:col-end-7 ">
            <LastMatches setLastMatch={setLastMatch} />
          </div>
          {location.pathname === "/dashboard/competitive" && (
            <>
              <div className="row-start-2 row-end-2 col-start-1 col-end-5 block h-[300px] xl:row-start-3 xl:row-end-3 xl:col-start-1 xl:col-end-5 lg:col-end-7">
                <Rating />
              </div>

              <div className="row-start-2 row-end-2 col-start-5 col-end-7 block h-[300px] xl:row-start-3 xl:row-end-3 xl:col-start-5 xl:col-end-7 lg:col-start-1 lg:row-start-4 lg:row-end-4">
                <HighestRating />
              </div>
            </>
          )}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MatchDashboardContent;
