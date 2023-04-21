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
import { PlayerMmrData } from "../types/playerMmr.type";
import ApiService from "../services/api.service";

type IProps = {
  children: ReactNode;
};

type PlayerType = {
  player: PlayerData | null;
  setPlayer: Dispatch<SetStateAction<PlayerData | null>>;
  playerCompetitive: any; //! TYPAGE A CHANGER
  setPlayerCompetitive: Dispatch<SetStateAction<any>>; //! TYPAGE A CHANGER
  playerMmr: PlayerMmrData | null;
  setPlayerMmr: Dispatch<SetStateAction<PlayerMmrData | null>>;
  Signout: () => void;
  getCompetitiveData: () => void;
  getCompetitiveMatchData: (matchId: string) => void;
  getMmrData: () => void;
};

const PlayerContext = createContext<PlayerType>({
  player: null,
  setPlayer: () => {},
  playerCompetitive: null,
  setPlayerCompetitive: () => {},
  playerMmr: null,
  setPlayerMmr: () => {},
  Signout: () => {},
  getCompetitiveData: () => {},
  getCompetitiveMatchData: () => {},
  getMmrData: () => {},
});

const PlayerContextProvider: FC<IProps> = ({ children }) => {
  const [player, setPlayer] = useState<PlayerData | null>(null);
  const [playerCompetitive, setPlayerCompetitive] = useState<any>(null);
  const [playerMmr, setPlayerMmr] = useState<PlayerMmrData | null>(null);

  const Signout = (): void => {
    setPlayer(null);
    setPlayerCompetitive(null);
    setPlayerMmr(null);
    localStorage.removeItem("player");
    localStorage.removeItem("playerCompetitive");
    localStorage.removeItem("playerMmr");
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

  const getCompetitiveMatchData = async (matchId: string): Promise<string> => {
    try {
      const response = await ApiService.getCompetitiveMatch(matchId);
      const playerMatch = response.data.players.all_players.find(
        (playerInMatch: any) => playerInMatch.name === player?.name
      );
      const currentRankAtMatch = playerMatch.currenttier_patched;
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
          player.puuid
        );
        localStorage.setItem("playerMmr", JSON.stringify(response.data));
        setPlayerMmr(response.data);
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

    if (localStorage.getItem("playerCompetitive")) {
      const playerCompetitiveInfo: any = localStorage.getItem(
        "playerCompetitive"
      ) as any;
      setPlayerCompetitive(
        JSON.parse(playerCompetitiveInfo as unknown as string)
      );
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
        playerCompetitive,
        setPlayerCompetitive,
        playerMmr,
        setPlayerMmr,
        getCompetitiveData,
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
