import { useContext, useEffect } from "react";
import DashboardNav from "../../components/DashboardNav";
import PlayerWidget from "../../components/PlayerWidget";
import { PlayerContext } from "../../contexts/PlayerContext";
import LastMatches from "../../components/LastMatches";
import Loading from "../../assets/images/loading.gif";
import Rating from "../../components/Rating";

const DashboardCompetitive = () => {
  const {
    getCompetitiveData,
    getMmrData,
    playerCompetitive,
    player,
    playerMmr,
  } = useContext(PlayerContext);

  useEffect(() => {
    getCompetitiveData();
    getMmrData();
    console.log("watch out loop");
  }, [player]);

  return (
    <section className="mt-10">
      <div className="flex justify-between items-center">
        <DashboardNav />
        <PlayerWidget />
      </div>

      <div className="grid grid-cols-6 grid-rows-4 mt-10">
        {playerCompetitive && playerMmr ? (
          <>
            <div className="col-start-5 col-end-7 row-start-1 row-end-4 block h-fit">
              <LastMatches />
            </div>
            <div className="row-start-2 row-end-2 col-start-3 col-end-5 block h-[300px]">
              <Rating />
            </div>
            <div className="row-start-1 row-end-1 col-start-3 col-end-5 block h-fit"></div>
            <div className="row-start-1 row-end-1 col-start-3 col-end-5 block h-fit"></div>
          </>
        ) : (
          <div className="absolute left-2/4 top-2/4 flex flex-col gap-3 translate-y-[-50%] translate-x-[-50%]">
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
