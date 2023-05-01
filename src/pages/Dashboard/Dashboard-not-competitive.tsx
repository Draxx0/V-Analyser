import DashboardNav from "../../components/DashboardNav";
import MatchDashboardContent from "../../components/MatchDashboardContent";
import PlayerWidget from "../../components/PlayerWidget";
import useGetUnrateds from "../../hooks/UseGetUnrateds";
import { IPlayerMatchData } from "../../types/player-competitive.type";
import { useState, useEffect } from "react";
import NoDataFound from "../../components/NoDataFound";
import Loading from "../../components/Loading";

const DashboardNotCompetitive = () => {
  const [lastMatch, setLastMatch] = useState<IPlayerMatchData>(
    {} as IPlayerMatchData
  );
  const [noData, setNoData] = useState<boolean>(false);

  const { unrateds } = useGetUnrateds();

  useEffect(() => {
    if (unrateds && unrateds.length > 0) {
      setLastMatch(unrateds[0].matchData);
    }
  }, [unrateds]);

  return (
    <section className="mt-10">
      <div className="flex justify-between items-center sm:flex-wrap-reverse sm:gap-10 ">
        <DashboardNav />
        <PlayerWidget />
      </div>


      {unrateds && unrateds.length > 0 ? (
        <MatchDashboardContent
          lastMatch={lastMatch}
          setLastMatch={setLastMatch}
        />
      ) : (
        <Loading />
      )}

    </section>
  );
};

export default DashboardNotCompetitive;
