import { useContext, useEffect, useState } from "react";
import DashboardNav from "../../components/DashboardNav";
import PlayerWidget from "../../components/PlayerWidget";
import { PlayerContext } from "../../contexts/PlayerContext";
import LastMatches from "../../components/LastMatches";
import Rating from "../../components/Rating";
import LastMatch from "../../components/LastMatch";
import { IPlayerMatchCompetitiveData } from "../../types/player-competitive.type";
import Loading from "../../components/Loading";

const DashboardCompetitive = () => {
  const {
    getCompetitiveData,
    getMmrData,
    playerCompetitive,
    player,
    playerMmr,
  } = useContext(PlayerContext);

  const [lastMatch, setLastMatch] = useState<IPlayerMatchCompetitiveData>(
    {} as IPlayerMatchCompetitiveData
  );

  useEffect(() => {
    getCompetitiveData();
    getMmrData();
  }, [player]);

  useEffect(() => {
    if (playerCompetitive) {
      setLastMatch(playerCompetitive[0]);
    }
  }, [playerCompetitive]);

  return (
    <section className="mt-10">
      <div className="flex justify-between items-center">
        <DashboardNav />
        <PlayerWidget />
      </div>

      <div className="grid grid-cols-6 mt-[50px] pb-[100px] gap-5">
        {playerCompetitive && playerMmr ? (
          <>
            <div className="col-start-1 col-end-5 row-start-1 row-end-1 block h-full">
              <LastMatch lastMatch={lastMatch} />
            </div>
            <div className="col-start-5 col-end-7 row-start-1 row-end-1 block h-full">
              <LastMatches setLastMatch={setLastMatch} />
            </div>
            <div className="row-start-2 row-end-2 col-start-5 col-end-7 block h-[300px]">
              <Rating />
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </section>
  );
};

export default DashboardCompetitive;
