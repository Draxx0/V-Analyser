import { useContext, useEffect, useState } from "react";
import DashboardNav from "../../components/common/DashboardNav";
import PlayerWidget from "../../components/common/PlayerWidget";
import { PlayerContext } from "../../contexts/PlayerContext";
import MatchDashboardContent from "../../components/MatchDashboardContent";
import ApiService from "../../services/api.service";
import { IPlayerMatch } from "../../types/gamemodes";

const DashboardCompetitive = () => {
  return (
    <section className="mt-10">
      <div className="flex justify-between items-center sm:flex-wrap-reverse sm:gap-10 ">
        <DashboardNav />
        <PlayerWidget />
      </div>

      <MatchDashboardContent
      />
    </section>
  );
};

export default DashboardCompetitive;
