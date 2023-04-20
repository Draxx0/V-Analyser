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

type IProps = {
  children: ReactNode;
};

type PlayerType = {
  player: PlayerData | null;
  setPlayer: Dispatch<SetStateAction<PlayerData | null>>;
  playerCompetitive: any; //! TYPAGE A CHANGER
  setPlayerCompetitive: Dispatch<SetStateAction<any>>; //! TYPAGE A CHANGER
  Signout: () => void;
  getCompetitiveData: () => void;
  getCompetitiveMatchData: (matchId: string) => void;
};

const PlayerContext = createContext<PlayerType>({
  player: null,
  setPlayer: () => {},
  playerCompetitive: null,
  setPlayerCompetitive: () => {},
  Signout: () => {},
  getCompetitiveData: () => {},
  getCompetitiveMatchData: () => {},
});

const PlayerContextProvider: FC<IProps> = ({ children }) => {
  const [player, setPlayer] = useState<PlayerData | null>(null);
  const [playerCompetitive, setPlayerCompetitive] = useState<any>(null);

  const Signout = (): void => {
    setPlayer(null);
    setPlayerCompetitive(null);
    localStorage.removeItem("player");
    localStorage.removeItem("playerCompetitive");
    window.location.href = "/";
  };

  const getCompetitiveData = async (): Promise<void> => {
    if (player) {
      try {
        const response = await ApiService.getCompetitive(
          player.region,
          player.name,
          player.tag
        );
        localStorage.setItem(
          "playerCompetitive",
          JSON.stringify(response.data)
        );
        setPlayerCompetitive(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getCompetitiveMatchData = async (matchId: string): Promise<void> => {
    try {
      const response = await ApiService.getCompetitiveMatch(matchId);
      const playerMatch = response.data.players.all_players.find(
        (playerInMatch: any) => playerInMatch.name === player?.name
      );
      console.log("Player :", playerMatch);
      const currentRankAtMatch = playerMatch.currenttier_patched;
      console.log("Rank :", currentRankAtMatch);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("player")) {
      const playerInfo: PlayerData | null = localStorage.getItem(
        "player"
      ) as PlayerData | null;
      setPlayer(JSON.parse(playerInfo as unknown as string));
    } else if (localStorage.getItem("playerCompetitive")) {
      const playerCompetitiveInfo: any = localStorage.getItem(
        "playerCompetitive"
      ) as any;
      setPlayerCompetitive(
        JSON.parse(playerCompetitiveInfo as unknown as string)
      );
    }
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        player,
        setPlayer,
        playerCompetitive,
        setPlayerCompetitive,
        getCompetitiveData,
        getCompetitiveMatchData,
        Signout,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export { PlayerContextProvider, PlayerContext };
