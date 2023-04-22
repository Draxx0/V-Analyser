import { PlayerContext } from "../contexts/PlayerContext";
import { useContext } from "react";
import { rankIconFunction } from "../functions/rankIconFunction";

const Rating = () => {
  const { playerMmr } = useContext(PlayerContext);
  return (
    <div className="flex flex-col gap-5 gradient-yellow h-full items-center ">
      <h2 className="text-xl tracking-wide uppercase font-bold mb-3">Rating</h2>
      <img
        src={rankIconFunction(playerMmr?.currenttierpatched as string)}
        alt=""
        className="w-24"
      />
      <h4 className="text-l tracking-wide uppercase font-bold">
        {playerMmr?.currenttierpatched}
      </h4>
    </div>
  );
};

export default Rating;
