import DashboardNav from "../../components/DashboardNav";
import MatchDashboardContent from "../../components/MatchDashboardContent";
import PlayerWidget from "../../components/PlayerWidget";
import useGetUnrateds from "../../hooks/UseGetUnrateds";
import { IPlayerMatchData } from "../../types/player-competitive.type";
import { useState, useEffect } from "react";

const DashboardNotCompetitive = () => {
  const [lastMatch, setLastMatch] = useState<IPlayerMatchData>(
    {} as IPlayerMatchData
  );

  const { unrateds } = useGetUnrateds();

  useEffect(() => {
    if (unrateds) {
      setLastMatch(unrateds[0].matchData);
    }
  }, [unrateds]);

  useEffect(() => {}, []);
  return (
    <section className="mt-10">
      <div className="flex justify-between items-center">
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

export default DashboardNotCompetitive;
