import { Map } from "../types/map.type";
import { TeamScores, didTeamWin } from "./didTeamWin";

interface AgentCount {
  [key: string]: number;
}

export const mapDataCalculator = (
  currentMap: Map[],
  request: string
): string => {
  const getKills = (): string => {
    let killsCount: number = 0;
    for (let index = 0; index < currentMap.length; index++) {
      const element = currentMap[index];
      killsCount += element.stats.kills;
    }
    return killsCount.toString();
  };

  const getDeaths = (): string => {
    let deathCount: number = 0;
    for (let index = 0; index < currentMap.length; index++) {
      const element = currentMap[index];
      deathCount += element.stats.deaths;
    }
    return deathCount.toString();
  };

  const getAssists = (): string => {
    let assistCount: number = 0;
    for (let index = 0; index < currentMap.length; index++) {
      const element = currentMap[index];
      assistCount += element.stats.assists;
    }
    return assistCount.toString();
  };

  const getTotalScore = (): string => {
    let totalScoreCount: number = 0;
    for (let index = 0; index < currentMap.length; index++) {
      const element = currentMap[index];
      totalScoreCount += element.stats.score;
    }
    return totalScoreCount.toString();
  };

  const getKdaRatio = (): string => {
    let allKills: number = 0;
    let allDeaths: number = 0;
    let kdaRatio: number = 0;
    for (let index = 0; index < currentMap.length; index++) {
      const element = currentMap[index];
      allKills += element.stats.kills;
      allDeaths += element.stats.deaths;
    }
    kdaRatio = allKills / allDeaths;
    return kdaRatio.toFixed(2).toString();
  };

  const getFavoriteMode = (): string => {
    let Competitve: number = 0;
    let Unrated: number = 0;
    let SpikeRush: number = 0;
    let Deathmatch: number = 0;

    for (let index = 0; index < currentMap.length; index++) {
      const element = currentMap[index];

      switch (element.meta.mode) {
        case "Competitive":
          Competitve++;
          break;
        case "Unrated":
          Unrated++;
          break;
        case "Spike Rush":
          SpikeRush++;
          break;
        case "Deathmatch":
          Deathmatch++;
          break;
        default:
          break;
      }
    }
    const max = Math.max(Competitve, Unrated, SpikeRush, Deathmatch);

    if (max === Competitve) {
      return "Competitive";
    } else if (max === Unrated) {
      return "Unrated";
    } else if (max === SpikeRush) {
      return "Spike Rush";
    } else if (max === Deathmatch) {
      return "Deathmatch";
    } else return "no data found";
  };

  const getFavoriteAgent = (): string => {
    const agentCount: AgentCount = {};

    for (const match of currentMap) {
      const agentName = match.stats.character.name;
      agentCount[agentName] = agentCount[agentName]
        ? agentCount[agentName] + 1
        : 1;
    }

    let favoriteAgent: string = "";
    let maxCount: number = 0;

    for (const agentName in agentCount) {
      if (agentCount[agentName] > maxCount) {
        maxCount = agentCount[agentName];
        favoriteAgent = agentName;
      }
    }

    return favoriteAgent;
  };

  const getWinratePercentage = (): string => {
    let winCount: number = 0;
    let lossCount: number = 0;

    for (let index: number = 0; index < currentMap.length; index++) {
      const element: Map = currentMap[index];
      const teamScore: TeamScores = {
        blue: element.teams.blue,
        red: element.teams.red,
      };
      const playerTeam: string = element.stats.team;
      const didWin: boolean = didTeamWin(playerTeam, teamScore);
      if (didWin) {
        winCount++;
      } else {
        lossCount++;
      }
    }

    const winrate: number = (winCount / (winCount + lossCount)) * 100;
    return winrate.toFixed(1).toString();
  };

  switch (request) {
    case "kdRatio":
      return getKdaRatio();

    case "kills":
      return getKills();

    case "deaths":
      return getDeaths();

    case "assists":
      return getAssists();

    case "totalScore":
      return getTotalScore();

    case "favoriteMode":
      return getFavoriteMode();

    case "favoriteAgent":
      return getFavoriteAgent();

    case "winrate":
      return getWinratePercentage();

    default:
      return "no data found";
  }
};
