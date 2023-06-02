import { Map } from "../types/map.type";
import { didTeamWin } from "./didTeamWin";

interface AgentCount {
  [key: string]: number;
}

type mapDataCalculatorFunction =
  | "kdRatio"
  | "kills"
  | "deaths"
  | "assists"
  | "totalScore"
  | "favoriteMode"
  | "favoriteAgent"
  | "winrate";

export const mapDataCalculator = (
  currentMap: Map[],
  request: mapDataCalculatorFunction
): string => {
  const getKills = (): string => {
    let killsCount = 0;
    for (let index = 0; index < currentMap.length; index++) {
      const element = currentMap[index];
      killsCount += element.stats.kills;
    }
    return killsCount.toString();
  };

  const getDeaths = (): string => {
    let deathCount = 0;
    for (let index = 0; index < currentMap.length; index++) {
      const element = currentMap[index];
      deathCount += element.stats.deaths;
    }
    return deathCount.toString();
  };

  const getAssists = (): string => {
    let assistCount = 0;
    for (let index = 0; index < currentMap.length; index++) {
      const element = currentMap[index];
      assistCount += element.stats.assists;
    }
    return assistCount.toString();
  };

  const getTotalScore = (): string => {
    let totalScoreCount = 0;
    for (let index = 0; index < currentMap.length; index++) {
      const element = currentMap[index];
      totalScoreCount += element.stats.score;
    }
    return totalScoreCount.toString();
  };

  const getKdaRatio = (): string => {
    let allKills = 0;
    let allDeaths = 0;
    for (let index = 0; index < currentMap.length; index++) {
      const element = currentMap[index];
      allKills += element.stats.kills;
      allDeaths += element.stats.deaths;
    }
    return (allKills / allDeaths).toFixed(2).toString();
  };

  const getFavoriteMode = (): string => {
    let CompetitveCount = 0;
    let UnratedCount = 0;
    let SpikeRushCount = 0;
    let DeathmatchCount = 0;

    for (let index = 0; index < currentMap.length; index++) {
      const element = currentMap[index];

      switch (element.meta.mode) {
        case "Competitive":
          CompetitveCount++;
          break;
        case "Unrated":
          UnratedCount++;
          break;
        case "Spike Rush":
          SpikeRushCount++;
          break;
        case "Deathmatch":
          DeathmatchCount++;
          break;
        default:
          break;
      }
    }
    const max = Math.max(
      CompetitveCount,
      UnratedCount,
      SpikeRushCount,
      DeathmatchCount
    );

    if (max === CompetitveCount) {
      return "Competitive";
    } else if (max === UnratedCount) {
      return "Unrated";
    } else if (max === SpikeRushCount) {
      return "Spike Rush";
    } else if (max === DeathmatchCount) {
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

    let favoriteAgent = "";
    let maxCount = 0;

    for (const agentName in agentCount) {
      if (agentCount[agentName] > maxCount) {
        maxCount = agentCount[agentName];
        favoriteAgent = agentName;
      }
    }

    return favoriteAgent;
  };

  const getWinratePercentage = (): string => {
    let winCount = 0;
    let lossCount = 0;

    for (let index = 0; index < currentMap.length; index++) {
      const element: Map = currentMap[index];
      const didWin: boolean = didTeamWin(element.stats.team, element.teams);
      if (didWin) {
        winCount++;
      } else {
        lossCount++;
      }
    }

    const winrate = (winCount / (winCount + lossCount)) * 100;

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
      return "There is no data for this request";
  }
};
