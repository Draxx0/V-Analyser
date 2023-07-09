import { PlayerMmrData } from "../types/player.type";

export const modelingMmrData = (data: PlayerMmrData) => {
  return {
    name: data.name,
    tag: data.tag,
    puuid: data.puuid,
    current_data: {
      currenttier: data.current_data.currenttier,
      currenttierpatched: data.current_data.currenttierpatched,
      images: data.current_data.images,
      ranking_in_tier: data.current_data.ranking_in_tier,
      mmr_change_to_last_game: data.current_data.mmr_change_to_last_game,
      elo: data.current_data.elo,
      games_needed_for_rating: data.current_data.games_needed_for_rating,
      old: data.current_data.old,
    },
    highest_rank: {
      old: data.highest_rank.old,
      tier: data.highest_rank.tier,
      patched_tier: data.highest_rank.patched_tier,
      season: data.highest_rank.season,
    },
  };
};
