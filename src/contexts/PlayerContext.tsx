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
import { PlayerMmrData } from "../types/player.type";
import ApiService from "../services/api.service";

type IProps = {
  children: ReactNode;
};

type PlayerType = {
  player: PlayerData | null;
  setPlayer: Dispatch<SetStateAction<PlayerData | null>>;
  playerMmr: PlayerMmrData | null;
  setPlayerMmr: Dispatch<SetStateAction<PlayerMmrData | null>>;
  Signout: () => void;
  getCompetitiveMatchData: (matchId: string) => void;
  getMmrData: () => void;
};

const PlayerContext = createContext<PlayerType>({
  player: null,
  setPlayer: () => { },
  playerMmr: null,
  setPlayerMmr: () => { },
  Signout: () => { },
  getCompetitiveMatchData: () => { },
  getMmrData: () => { },
});

const PlayerContextProvider: FC<IProps> = ({ children }) => {
  const [player, setPlayer] = useState<PlayerData | null>(null);
  const [playerMmr, setPlayerMmr] = useState<PlayerMmrData | null>(null);

  const Signout = (): void => {
    setPlayer(null);
    setPlayerMmr(null);
    localStorage.removeItem("player");
    localStorage.removeItem("playerMmr");
    window.location.href = "/";
  };

  const getCompetitiveMatchData = async (matchId: string): Promise<string> => {
    try {
      const response = await ApiService.getCompetitiveMatch(matchId);
      const playerMatch = response.data.players.all_players.find(
        (playerInMatch: any) => playerInMatch.name === player?.name
      );
      const currentRankAtMatch = playerMatch?.currenttier_patched;
      return currentRankAtMatch;
    } catch (error) {
      console.log(error);
      return "";
    }
  };

  const getMmrData = async (): Promise<void> => {
    if (player) {
      try {
        const response = await ApiService.getPlayerMmr(
          player.region,
          player.name,
          player.tag
        );
        localStorage.setItem("playerMmr", JSON.stringify(response));
        setPlayerMmr(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("player")) {
      const playerInfo: PlayerData | null = localStorage.getItem(
        "player"
      ) as PlayerData | null;
      setPlayer(JSON.parse(playerInfo as unknown as string));
    }

    if (localStorage.getItem("playerMmr")) {
      const playerMmrInfo: PlayerMmrData | null = localStorage.getItem(
        "playerMmr"
      ) as PlayerMmrData | null;
      setPlayerMmr(JSON.parse(playerMmrInfo as unknown as string));
    }
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        player,
        setPlayer,
        playerMmr,
        setPlayerMmr,
        getCompetitiveMatchData,
        getMmrData,
        Signout,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export { PlayerContextProvider, PlayerContext };
