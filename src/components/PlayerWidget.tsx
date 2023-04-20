import { useContext } from "react";
import Badge from "../assets/images/valorant-badge.png";
import { PlayerContext } from "../contexts/PlayerContext";

const PlayerWidget = () => {
  const { player } = useContext(PlayerContext);
  return (
    <>
      {player && (
        <div className="w-2/5 flex gap-2 justify-end">
          <div className="flex gap-2 items-center">
            <img src={Badge} alt="" className="w-6 h-6" />
            <p className="text-s font-bold">{player.name}</p>
            <p className="text-s text-gray font-bold">#{player.tag}</p>
            <img src={player.card.small} alt="" className="w-10 rounded" />
          </div>
        </div>
      )}
    </>
  );
};

export default PlayerWidget;
