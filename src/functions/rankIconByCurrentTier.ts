export const rankIconByCurrentTier = (currentTier: number): string => {
  switch (currentTier) {
    case 1:
      return "/assets/images/ranks/unranked.webp";
      break;

    case 3:
      return "/assets/images/ranks/iron1.webp";
      break;

    case 4:
      return "/assets/images/ranks/iron2.webp";
      break;

    case 5:
      return "/assets/images/ranks/iron3.webp";
      break;

    case 6:
      return "/assets/images/ranks/bronze1.webp";
      break;

    case 7:
      return "/assets/images/ranks/bronze2.webp";
      break;

    case 8:
      return "/assets/images/ranks/beonze3.webp";
      break;

    case 9:
      return "/assets/images/ranks/silver1.webp";
      break;

    case 10:
      return "/assets/images/ranks/silver2.webp";
      break;

    case 11:
      return "/assets/images/ranks/silver3.webp";
      break;

    case 12:
      return "/assets/images/ranks/gold1.webp";
      break;

    case 13:
      return "/assets/images/ranks/gold2.webp";
      break;

    case 14:
      return "/assets/images/ranks/gold3.webp";
      break;

    case 15:
      return "/assets/images/ranks/platinum1.webp";
      break;

    case 16:
      return "/assets/images/ranks/platinum2.webp";
      break;

    case 17:
      return "/assets/images/ranks/platinum3.webp";
      break;

    case 18:
      return "/assets/images/ranks/diamond1.webp";
      break;

    case 19:
      return "/assets/images/ranks/diamond2.webp";
      break;

    case 20:
      return "/assets/images/ranks/diamond3.webp";
      break;

    case 21:
      return "/assets/images/ranks/ascendant1.webp";
      break;

    case 22:
      return "/assets/images/ranks/ascendant2.webp";
      break;

    case 23:
      return "/assets/images/ranks/ascendant3.webp";
      break;

    case 24:
      return "/assets/images/ranks/immortal1.webp";
      break;

    case 25:
      return "/assets/images/ranks/immortal2.webp";
      break;

    case 26:
      return "/assets/images/ranks/immortal3.webp";
      break;

    case 27:
      return "/assets/images/ranks/radiant.webp";
      break;

    default:
      return "/assets/images/ranks/unranked.png";
      break;
  }
};
