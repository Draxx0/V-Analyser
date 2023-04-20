import { useContext, useEffect } from "react";
import DashboardNav from "../../components/DashboardNav";
import PlayerWidget from "../../components/PlayerWidget";
import { PlayerContext } from "../../contexts/PlayerContext";
import LastMatches from "../../components/LastMatches";
import Loading from "../../assets/images/loading.gif";

const DashboardCompetitive = () => {
  const { getCompetitiveData, playerCompetitive, player } =
    useContext(PlayerContext);

  useEffect(() => {
    getCompetitiveData();
  }, [player]);

  console.log(playerCompetitive);
  return (
    <section className="mt-10">
      <div className="flex justify-between items-center">
        <DashboardNav />
        <PlayerWidget />
      </div>

      <div className="grid grid-cols-6 mt-10 relative">
        {playerCompetitive ? (
          <div className="col-start-5 col-end-7 flex">
            <LastMatches />
          </div>
        ) : (
          <div className="absolute left-2/4 top-2/4 flex flex-col gap-3 translate-y-[-100%] translate-x-[-50%]">
            <img src={Loading} alt="" className="w-32" />
            <span className="text-2xl font-semibold tracking-wide mt-6">
              Loading...
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default DashboardCompetitive;
