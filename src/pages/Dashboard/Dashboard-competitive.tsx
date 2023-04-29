import { useContext, useEffect, useState } from "react";
import DashboardNav from "../../components/DashboardNav";
import PlayerWidget from "../../components/PlayerWidget";
import { PlayerContext } from "../../contexts/PlayerContext";
import { IPlayerMatchData } from "../../types/player-competitive.type";
import MatchDashboardContent from "../../components/MatchDashboardContent";

const DashboardCompetitive = () => {
  const { getCompetitiveData, getMmrData, playerCompetitive, player } =
    useContext(PlayerContext);

  const [lastMatch, setLastMatch] = useState<IPlayerMatchData>(
    {} as IPlayerMatchData
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
      <div className="flex justify-between items-center sm:flex-wrap-reverse sm:gap-10 ">
        <DashboardNav />
        <PlayerWidget />
      </div>

      <MatchDashboardContent
        lastMatch={lastMatch}
        setLastMatch={setLastMatch}
      />
    </section>
  );
};

export default DashboardCompetitive;
