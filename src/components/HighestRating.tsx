import Loading from "./common/Loading";
import { rankIconFunction } from "../functions/rankIconFunction";
import { PlayerMmrData } from "../types/player.type";

const HighestRating = ({ playerMmr }: { playerMmr: PlayerMmrData }) => {
  return (
    <>
      {playerMmr ? (
        <div className="flex flex-col gap-5 items-center gradient-yellow h-full">
          <h2 className="text-xl tracking-wide uppercase font-bold mb-3">
            Highest Rating
          </h2>
          <img
            src={rankIconFunction(playerMmr.highest_rank.patched_tier)}
            alt="icon agent"
            className="w-24"
          />

          <h4 className="text-l tracking-wide uppercase font-bold">
            {playerMmr.highest_rank.patched_tier}
          </h4>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default HighestRating;
