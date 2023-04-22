import { useContext, useState, useEffect } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import { agentIconFunction } from "../functions/agentIconFunction";
import { rankIconFunction } from "../functions/rankIconFunction";
import { didTeamWin } from "../functions/didTeamWin";
import { IPlayerMatchCompetitiveData } from "../types/player-competitive.type";
import Loading from "./Loading";

const LastMatches = ({
  setLastMatch,
}: {
  setLastMatch: React.Dispatch<
    React.SetStateAction<IPlayerMatchCompetitiveData>
  >;
}) => {
  const [matchResults, setMatchResults] = useState<any[]>([]);
  const { playerCompetitive, setPlayerCompetitive, getCompetitiveMatchData } =
    useContext(PlayerContext);

  useEffect(() => {
    if (playerCompetitive) {
      addRankToMatch();
    }
  }, []);

  const addRankToMatch = async () => {
    const updatedPlayerCompetitive = await Promise.all(
      playerCompetitive.map(async (match: any) => {
        const response = await getCompetitiveMatchData(match.meta.id);
        return {
          ...match,
          rank: response,
        };
      })
    );
    setPlayerCompetitive(updatedPlayerCompetitive);

    const matchResults = updatedPlayerCompetitive.map((match: any) => {
      const blueScore = match.teams.blue;
      const redScore = match.teams.red;
      const playerRank = match.rank;
      const teamScores = { blue: blueScore, red: redScore };

      return { matchData: match, teamScores, rank: playerRank };
    });

    setMatchResults(matchResults);
  };

  return (
    <div className="flex flex-col gap-2 ml-2 gradient w-full h-full relative">
      <h2 className="text-xl tracking-wide uppercase font-bold mb-3">
        Last Matches
      </h2>

      {matchResults.length > 0 ? (
        <div className="flex flex-col gap-4">
          {matchResults.map((match: any) => (
            <div
              className={`grid grid-cols-4 items-center p-2 cursor-pointer hover:border-5 hover:border-white hover:scale-[1.02] ${
                didTeamWin(match.matchData.stats.team, match.teamScores)
                  ? "win"
                  : "lose"
              }`}
              onClick={() => setLastMatch(match.matchData)}
              key={match.matchData.meta.id}
            >
              <img
                alt="icon d'agent"
                className="w-12 rounded-full border border-gray"
                src={agentIconFunction(match.matchData.stats.character.name)}
              />

              <div className="flex flex-col gap-1 uppercase font-bold">
                <span>{match.matchData.meta.map.name}</span>
                <div className="flex gap-1">
                  <span className="text-green font-bold">
                    {match.matchData.teams.blue}
                  </span>
                  <span className="font-bold"> : </span>
                  <span className="text-red font-bold">
                    {match.matchData.teams.red}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1 uppercase font-bold">
                <span className="font-bold text-gray">K / D / A</span>
                <div className="flex gap-1">
                  <span className="font-bold">
                    {match.matchData.stats.kills}
                  </span>
                  <span className="font-bold"> / </span>
                  <span className="font-bold">
                    {match.matchData.stats.deaths}
                  </span>
                  <span className="font-bold"> / </span>
                  <span className="font-bold">
                    {match.matchData.stats.assists}
                  </span>
                </div>
              </div>

              <img
                src={rankIconFunction(match.rank)}
                alt="icon rank"
                className="w-12 flex m-auto"
              />
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default LastMatches;
