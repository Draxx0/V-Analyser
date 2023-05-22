import DashboardNav from "../../components/DashboardNav";
import MatchDashboardContent from "../../components/MatchDashboardContent";
import PlayerWidget from "../../components/PlayerWidget";
import useGetUnrateds from "../../hooks/UseGetUnrateds";
import { IPlayerMatchData } from "../../types/player-competitive.type";
import { useState, useEffect } from "react";
import NoDataFound from "../../components/NoDataFound";
import Loading from "../../components/Loading";
import { useLocation } from "react-router-dom";
import useGetSwiftplay from "../../hooks/UseGetSwiftplay";

const DashboardNotCompetitive = () => {
  const location = useLocation();
  const [lastMatch, setLastMatch] = useState<IPlayerMatchData>(
    {} as IPlayerMatchData
  );

  const { unrateds } = useGetUnrateds();
  const { swiftplays } = useGetSwiftplay();

  useEffect(() => {
    if (location.pathname === "/dashboard/unrated" && unrateds && unrateds.length > 0) {
      setLastMatch(unrateds[0].matchData);
    }
  }, [unrateds, location.pathname]);

  useEffect(() => {
    if (location.pathname === "/dashboard/swiftplay" && swiftplays && swiftplays.length > 0) {
      console.log(swiftplays[0])
      setLastMatch(swiftplays[0]);
    }
  }, [swiftplays, location.pathname]);

  return (
    <section className="mt-10">
      <div className="flex justify-between items-center sm:flex-wrap-reverse sm:gap-10 ">
        <DashboardNav />
        <PlayerWidget />
      </div>


      {unrateds && unrateds.length > 0 || swiftplays && swiftplays && swiftplays.length > 0 ? (
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
