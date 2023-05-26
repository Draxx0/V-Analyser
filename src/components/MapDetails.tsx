import { GiChewedSkull, GiSkullCrossedBones } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { agentSplashartFunction } from "../functions/agentSplashartFunction";
import { IMap } from "../types/map.type";
import { mapDataCalculator } from "../functions/mapDataCalculator";
import { agentIconFunction } from "../functions/agentIconFunction";
import Loading from "./common/Loading";

const MapDetails = ({ currentMap }: { currentMap: IMap[] }) => {
  return (
    <>
      {currentMap.length > 0 ? (
        <div className="flex justify-between p-10 h-full">
          <div className="flex flex-col justify-evenly xl:gap-10 lg:w-full">
            <h1 className="text-4xl font-bold tracking-wide text-red mb-10">
              {currentMap[0].meta.map.name}
            </h1>

            <span className="bg-gray w-full h-[2px]"></span>

            <h2 className="text-2xl font-bold tracking-wide">
              Winrate -{" "}
              <span className="text-red text-2xl font-bold tracking-wide">
                {mapDataCalculator(currentMap, "winrate")} %
              </span>
            </h2>

            <h2 className="text-2xl font-bold tracking-wide lg:flex lg:items-center sm:flex-col sm:items-start sm:gap-3">
              Top agent {" "}
              <span className="text-red text-2xl font-bold tracking-wide lg:ml-2 sm:ml-0">
                {mapDataCalculator(currentMap, "favoriteAgent")}
              </span>

              <img src={agentIconFunction(mapDataCalculator(currentMap, "favoriteAgent"))} alt="agent icon" className="hidden ml-5 rounded-full border-2 border-red w-16 scale-x-[-1] lg:block" />
            </h2>

            <span className="bg-gray w-full h-[2px]"></span>

            <div className="grid grid-cols-3 gap-10 xl:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <span className="text-gray font-bold text-lg">K/D Ratio</span>
                <span className="text-lg font-bold">
                  {mapDataCalculator(currentMap, "kdRatio")}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-gray font-bold text-lg">Total Score</span>
                <span className="text-lg font-bold">
                  {mapDataCalculator(currentMap, "totalScore")}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-gray font-bold text-lg">
                  Favorite Mode
                </span>
                <span className="text-lg font-bold">
                  {" "}
                  {mapDataCalculator(currentMap, "favoriteMode")}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-gray font-bold text-lg">Kills</span>
                <span className="text-lg font-bold flex gap-2 items-center">
                  <GiChewedSkull /> {mapDataCalculator(currentMap, "kills")}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-gray font-bold text-lg">Deaths</span>
                <span className="text-lg font-bold flex gap-2 items-center">
                  <GiSkullCrossedBones />{" "}
                  {mapDataCalculator(currentMap, "deaths")}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-gray font-bold text-lg">Assistances</span>
                <span className="text-lg font-bold flex gap-2 items-center">
                  <FaHandsHelping /> {mapDataCalculator(currentMap, "assists")}
                </span>
              </div>
            </div>
          </div>



          <img
            src={agentSplashartFunction(
              mapDataCalculator(currentMap, "favoriteAgent")
            )}
            alt=""
            className="h-[600px] w-[600px] object-contain xl:h-[700px] xl:w-[400px] lg:hidden"
          />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default MapDetails;
