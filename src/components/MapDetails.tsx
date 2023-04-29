import { GiChewedSkull, GiSkullCrossedBones } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { agentSplashartFunction } from "../functions/agentSplashartFunction";
import { IMap } from "../types/map.type";
import Loading from "./Loading";
import { mapDataCalculator } from "../functions/mapDataCalculator";

const MapDetails = ({ currentMap }: { currentMap: IMap[] }) => {
  console.log(currentMap);
  return (
    <>
      {currentMap.length > 0 ? (
        <div className="flex justify-between p-10 h-full">
          <div className="flex flex-col justify-evenly">
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

            <h2 className="text-2xl font-bold tracking-wide">
              Top agent -{" "}
              <span className="text-red text-2xl font-bold tracking-wide">
                {mapDataCalculator(currentMap, "favoriteAgent")}
              </span>
            </h2>

            <span className="bg-gray w-full h-[2px]"></span>

            <div className="grid grid-cols-3 gap-10">
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
            className="h-[600px] w-[600px] object-contain"
          />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default MapDetails;
