import { PlayerContext } from "../contexts/PlayerContext";
import { useContext } from "react";
import { rankIconFunction } from "../functions/rankIconFunction";
import { rankIconByCurrentTier } from "../functions/rankIconByCurrentTier";
import Loading from "./Loading";

const Rating = () => {
  const { playerMmr } = useContext(PlayerContext);
  console.log(playerMmr);
  return (
    <>
      {playerMmr ? (
        <div className="grid grid-cols-2 justify-evenly gradient-yellow h-full items-start ">
          <div className="flex flex-col gap-5 items-center">
            <h2 className="text-xl tracking-wide uppercase font-bold mb-3">
              Rating
            </h2>
            <img
              src={rankIconFunction(playerMmr.current_data.currenttierpatched)}
              alt=""
              className="w-24"
            />
            <h4 className="text-l tracking-wide uppercase font-bold">
              {playerMmr.current_data.currenttierpatched}
            </h4>
          </div>

          <div className="flex flex-col gap-5 items-center">
            <h2 className="text-xl tracking-wide uppercase font-bold mb-3">
              Rank Rating
            </h2>

            <h4 className="text-xl tracking-wide uppercase font-bold">
              {playerMmr.current_data.ranking_in_tier}{" "}
              {playerMmr.current_data.currenttier < 25 && "/ 100"}
            </h4>
            <h4
              className={`text-l tracking-wide uppercase font-bold ${
                playerMmr.current_data.mmr_change_to_last_game > 0
                  ? "text-green"
                  : "text-red"
              }`}
            >
              {playerMmr.current_data.mmr_change_to_last_game > 0
                ? "+ " + playerMmr.current_data.mmr_change_to_last_game
                : playerMmr.current_data.mmr_change_to_last_game}{" "}
              Last game
            </h4>

            {playerMmr.current_data.currenttierpatched !== "Unranked" &&
            playerMmr.current_data.currenttierpatched !== "Radiant" ? (
              <div className="flex flex-col gap-2 items-center">
                <h4 className="text-l tracking-wide uppercase font-bold">
                  Next Rank
                </h4>
                <img
                  src={rankIconByCurrentTier(
                    playerMmr.current_data.currenttier + 1
                  )}
                  alt="rankIcon"
                  className="h-12 w-12"
                />
              </div>
            ) : (
              <h4 className="text-l tracking-wide uppercase text-green font-bold">
                You are Radiant !
              </h4>
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Rating;
