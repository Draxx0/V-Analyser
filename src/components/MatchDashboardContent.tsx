import { PlayerContext } from "../contexts/PlayerContext";
import { useContext } from "react";
import { IPlayerMatchData } from "../types/player-competitive.type";
import LastMatch from "./LastMatch";
import LastMatches from "./LastMatches";
import Rating from "./Rating";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";
import HighestRating from "./HighestRating";

interface Props {
  lastMatch: IPlayerMatchData;
  setLastMatch: React.Dispatch<React.SetStateAction<IPlayerMatchData>>;
}

const MatchDashboardContent = ({ lastMatch, setLastMatch }: Props) => {
  const { playerCompetitive, playerMmr } = useContext(PlayerContext);
  const location = useLocation();
  return (
    <div className="grid grid-cols-6 mt-[50px] pb-[100px] gap-5">
      {playerCompetitive && playerMmr ? (
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
