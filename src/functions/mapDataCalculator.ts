import { IMap } from "../types/map.type";

export const mapDataCalculator = (
  currentMap: IMap[],
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
    return "toto pour le moment";
  };

  switch (request) {
    case "kdRatio":
      return getKdaRatio();
      break;

    case "kills":
      return getKills();
      break;

    case "deaths":
      return getDeaths();
      break;

    case "assists":
      return getAssists();
      break;

    case "totalScore":
      return getTotalScore();
      break;

    default:
      return "no data found";
      break;
  }
};
