import { useContext, useState, useEffect } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import { agentIconFunction } from "../functions/agentIconFunction";
import { rankIconFunction } from "../functions/rankIconFunction";
import { didTeamWin } from "../functions/didTeamWin";
import {
  IPlayerMatch,
  IPlayerMatchDataWithRank
} from "../types/gamemodes";
import Loading from "./common/Loading";
import { useLocation } from "react-router-dom";
import useGetUnrateds from "../hooks/UseGetUnrateds";
import useGetSwiftplay from "../hooks/UseGetSwiftplay";
import useGetCompetitive from "../hooks/UseGetCompetitive";

const LastMatches = ({ setLastMatch, }: { setLastMatch: React.Dispatch<React.SetStateAction<IPlayerMatch | IPlayerMatchDataWithRank | null>> }) => {
  const [matchResults, setMatchResults] = useState<IPlayerMatchDataWithRank[] | IPlayerMatch[] | null>([]);
  const location = useLocation();
  const { getSwiftplay } = useGetSwiftplay();
  const { getUnrateds } = useGetUnrateds();
  const { getCompetitive } = useGetCompetitive();

  const isRankedMatch = (match: IPlayerMatchDataWithRank | IPlayerMatch): match is IPlayerMatchDataWithRank => {
    return (match as IPlayerMatchDataWithRank).rank !== undefined
  }

  const SwicthCaseMatch = async () => {
    switch (location.pathname) {
      case "/dashboard/competitive":
        const competitives: IPlayerMatchDataWithRank[] | null = await getCompetitive();
        setMatchResults(competitives);
        setLastMatch(competitives && competitives[0])
        break;

      case "/dashboard/unrated":
        const unrateds = await getUnrateds();
        setMatchResults(unrateds);
        setLastMatch(unrateds && unrateds[0])
        break;

      case "/dashboard/swiftplay":
        const swiftplays = await getSwiftplay();
        setMatchResults(swiftplays);
        setLastMatch(swiftplays && swiftplays[0])
        break;
    }
  };

  useEffect(() => {
    SwicthCaseMatch();
  }, [location.pathname]);

  return (
    <div className="flex flex-col gap-2 gradient w-full h-full relative xl:max-h-[300px] xl:overflow-y-scroll">
      {matchResults && matchResults.length > 0 ? (
        <>
          <h2 className="text-xl tracking-wide uppercase font-bold mb-3">
            Last Matches
          </h2>
          <div className="flex flex-col gap-4">
            {matchResults.map((match: IPlayerMatchDataWithRank | IPlayerMatch) => (
              <div
                className={`grid grid-cols-4 items-center p-2 cursor-pointer hover:border-5 hover:border-white hover:scale-[1.02] ${didTeamWin(match.stats.team, match.teams)
                  ? "win"
                  : "lose"
                  }`}
                onClick={() => setLastMatch(match)}
                key={match.meta.id}
              >
                <img
                  alt="icon d'agent"
                  className="w-12 rounded-full border border-gray"
                  src={agentIconFunction(match.stats.character.name)}
                />

                <div className="flex flex-col gap-1 uppercase font-bold">
                  <span>{match.meta.map.name}</span>
                  <div className="flex gap-1">
                    <span className="text-green font-bold">
                      {match.stats.team === "Blue" ? match.teams.blue : match.teams.red}
                    </span>
                    <span className="font-bold"> : </span>
                    <span className="text-red font-bold">
                      {match.stats.team === "Blue" ? match.teams.red : match.teams.blue}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-1 uppercase font-bold">
                  <span className="font-bold text-gray">K / D / A</span>
                  <div className="flex gap-1">
                    <span className="font-bold">
                      {match.stats.kills}
                    </span>
                    <span className="font-bold"> / </span>
                    <span className="font-bold">
                      {match.stats.deaths}
                    </span>
                    <span className="font-bold"> / </span>
                    <span className="font-bold">
                      {match.stats.assists}
                    </span>
                  </div>
                </div>

                {isRankedMatch(match) && match.rank && (
                  <img
                    src={rankIconFunction(match.rank)}
                    alt="icon rank"
                    className="w-12 flex m-auto"
                  />
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default LastMatches;
