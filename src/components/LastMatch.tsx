import { IPlayerMatchData } from "../types/player-competitive.type";
import { formatDate } from "../functions/formatDate";
import { GiHeadshot, GiLegArmor, GiTrenchBodyArmor } from "react-icons/gi";
import { agentSplashartFunction } from "../functions/agentSplashartFunction";
import Loading from "./Loading";

type IProps = {
  lastMatch: IPlayerMatchData;
};

const LastMatch = ({ lastMatch }: IProps) => {
  const shotsSum =
    lastMatch?.stats?.shots.head +
    lastMatch?.stats?.shots.body +
    lastMatch?.stats?.shots.leg;
  return (
    <>
      <div className="flex justify-between gradient-purple w-full h-full">
        {lastMatch.stats ? (
          <>
            <div className="flex flex-col justify-evenly relative bottom-4 w-1/2 gap-10">
              <h2 className="text-xl tracking-wide uppercase font-bold">
                Match Result -{" "}
                <span className="text-red">{lastMatch.meta.map.name}</span> -{" "}
                {formatDate(lastMatch.meta.started_at)}
              </h2>

              <span className="text-5xl tracking-wide uppercase font-bold text-red">
                {lastMatch.stats.character.name}
              </span>

              <span className="bg-gray w-full h-[2px]"></span>

              <div className="grid grid-cols-3 grid-rows-2 gap-3">
                <div className="flex flex-col gap-2">
                  <span className="text-gray font-bold text-lg">K/D Ratio</span>
                  <span className="text-lg font-bold">
                    {(lastMatch.stats.kills / lastMatch.stats.deaths).toFixed(
                      2
                    )}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-gray font-bold text-lg">Damage</span>
                  <span className="text-lg font-bold">
                    {lastMatch.stats.damage.made}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-gray font-bold text-lg">Score</span>
                  <span className="text-lg font-bold">
                    {lastMatch.stats.score}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-gray font-bold text-lg">
                    Headshot %
                  </span>
                  <span className="text-lg font-bold flex gap-2 items-center">
                    <GiHeadshot />{" "}
                    {((lastMatch.stats.shots.head / shotsSum) * 100).toFixed(2)}{" "}
                    %
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-gray font-bold text-lg">Body %</span>
                  <span className="text-lg font-bold flex gap-2 items-center">
                    <GiTrenchBodyArmor />{" "}
                    {((lastMatch.stats.shots.body / shotsSum) * 100).toFixed(2)}{" "}
                    %
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-gray font-bold text-lg">Leg %</span>
                  <span className="text-lg font-bold flex gap-2 items-center">
                    <GiLegArmor />{" "}
                    {((lastMatch.stats.shots.leg / shotsSum) * 100).toFixed(2)}{" "}
                    %
                  </span>
                </div>
              </div>
            </div>
            <div className="w-1/2 relative bottom-[50px]">
              <img
                src={agentSplashartFunction(lastMatch.stats.character.name)}
                alt=""
                className="m-auto w-[550px] h-[550px] object-contain"
              />
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default LastMatch;
