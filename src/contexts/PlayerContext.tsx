import {
  createContext,
  useState,
  FC,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect,
} from "react";
import { PlayerData } from "../types/player.type";
import ApiService from "../services/api.service";
import { IMatch, PlayerInMatch } from "../types/match.type";

type IProps = {
  children: ReactNode;
};

type PlayerType = {
  player: PlayerData | null;
  setPlayer: Dispatch<SetStateAction<PlayerData | null>>;
  Signout: () => void;
  // getCompetitiveMatchData: (matchId: string) => void;
};

const PlayerContext = createContext<PlayerType>({
  player: null,
  setPlayer: () => { },
  Signout: () => { },
  // getCompetitiveMatchData: () => { },
});

const PlayerContextProvider: FC<IProps> = ({ children }) => {
  const [player, setPlayer] = useState<PlayerData | null>(null);

  const Signout = (): void => {
    setPlayer(null);
    localStorage.removeItem("player");
    localStorage.removeItem("playerMmr"); //! SHOULD BE REMOVE
    window.location.href = "/";
  };

  // const getCompetitiveMatchData = async (matchId: string): Promise<string> => {
  //   try {
  //     const response: IMatch = await ApiService.getCompetitiveMatch(matchId);

  //     const playerMatch = response.data.players.all_players.find(
  //       (playerInMatch: PlayerInMatch) => playerInMatch.name === player?.name
  //     );

  //     if (!playerMatch) throw new Error("Player not found in match");

  //     const currentRankAtMatch = playerMatch?.currenttier_patched;
  //     return currentRankAtMatch;
  //   } catch (error) {
  //     console.log(error);
  //     return "";
  //   }
  // };

  useEffect(() => {
    if (localStorage.getItem("player")) {
      const playerInfo: PlayerData = JSON.parse(
        localStorage.getItem("player")!
      );
      setPlayer(playerInfo);
    }
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        player,
        setPlayer,
        // getCompetitiveMatchData,
        Signout,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export { PlayerContextProvider, PlayerContext };
