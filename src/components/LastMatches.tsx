import { useContext, useState, useEffect } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import { agentIconFunction } from "../functions/agentIconFunction";
import { rankIconFunction } from "../functions/rankIconFunction";

interface TeamScores {
  blue: number;
  red: number;
}

function didTeamWin(team: string, teamScores: TeamScores) {
  if (team === "Blue") {
    return teamScores.blue >= 13;
  } else {
    return teamScores.red >= 13;
  }
}

const LastMatches = () => {
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

  console.log("SEE HERE", matchResults);

  return (
    <div className="flex flex-col gap-2 ml-2 gradient w-full h-full">
      <h2 className="text-2xl tracking-wide uppercase font-bold mb-3">
        Last Competitive Matches
      </h2>

      <div className="flex flex-col gap-4">
        {matchResults?.map((match: any) => (
          <div
            className={`grid grid-cols-4 items-center p-2 ${
              didTeamWin(match.matchData.stats.team, match.teamScores)
                ? "win"
                : "lose"
            }`}
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
                <span className="font-bold">{match.matchData.stats.kills}</span>
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

            <img src={rankIconFunction(match.rank)} alt="icon rank" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastMatches;
