export interface TeamScores {
  blue: number;
  red: number;
}

export const didTeamWin = (team: string, teamScores: TeamScores) => {
  if (team === "Blue") {
    if (teamScores.blue === 13 && teamScores.red < 13) {
      return true;
    } else if (teamScores.blue >= 12 && teamScores.red >= 12) {
      const maxValue = Math.max(teamScores.blue, teamScores.red);
      return teamScores.blue === maxValue;
    } else {
      return false;
    }
  } else {
    if (teamScores.red === 13 && teamScores.blue < 13) {
      return teamScores.red === 13 && teamScores.blue < 13;
    } else if (teamScores.red >= 12 && teamScores.blue >= 12) {
      const maxValue = Math.max(teamScores.blue, teamScores.red);
      return teamScores.red === maxValue;
    } else {
      return false;
    }
  }
};
