export const rankIconByCurrentTier = (currentTier: number): string => {
  switch (currentTier) {
    case 1:
      return "/assets/images/ranks/unranked.webp";

    case 3:
      return "/assets/images/ranks/iron1.webp";

    case 4:
      return "/assets/images/ranks/iron2.webp";

    case 5:
      return "/assets/images/ranks/iron3.webp";

    case 6:
      return "/assets/images/ranks/bronze1.webp";

    case 7:
      return "/assets/images/ranks/bronze2.webp";

    case 8:
      return "/assets/images/ranks/bronze3.webp";

    case 9:
      return "/assets/images/ranks/silver1.webp";

    case 10:
      return "/assets/images/ranks/silver2.webp";

    case 11:
      return "/assets/images/ranks/silver3.webp";

    case 12:
      return "/assets/images/ranks/gold1.webp";

    case 13:
      return "/assets/images/ranks/gold2.webp";

    case 14:
      return "/assets/images/ranks/gold3.webp";

    case 15:
      return "/assets/images/ranks/platinum1.webp";

    case 16:
      return "/assets/images/ranks/platinum2.webp";

    case 17:
      return "/assets/images/ranks/platinum3.webp";

    case 18:
      return "/assets/images/ranks/diamond1.webp";

    case 19:
      return "/assets/images/ranks/diamond2.webp";

    case 20:
      return "/assets/images/ranks/diamond3.webp";

    case 21:
      return "/assets/images/ranks/ascendant1.webp";

    case 22:
      return "/assets/images/ranks/ascendant2.webp";

    case 23:
      return "/assets/images/ranks/ascendant3.webp";

    case 24:
      return "/assets/images/ranks/immortal1.webp";

    case 25:
      return "/assets/images/ranks/immortal2.webp";

    case 26:
      return "/assets/images/ranks/immortal3.webp";

    case 27:
      return "/assets/images/ranks/radiant.webp";

    default:
      return "/assets/images/ranks/unranked.png";
  }
};
