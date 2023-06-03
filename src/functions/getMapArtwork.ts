export const getMapArtwork = (mapName: string): string => {
  switch (mapName) {
    case "Pearl":
      return "/assets/images/maps/pearl.webp";

    case "Ascent":
      return "/assets/images/maps/ascent.webp";

    case "Bind":
      return "/assets/images/maps/bind.webp";

    case "Breeze":
      return "/assets/images/maps/breeze.webp";

    case "Haven":
      return "/assets/images/maps/haven.webp";

    case "Icebox":
      return "/assets/images/maps/icebox.webp";

    case "Lotus":
      return "/assets/images/maps/lotus.webp";

    case "Fracture":
      return "/assets/images/maps/fracture.webp";

    case "Split":
      return "/assets/images/maps/split.webp";

    default:
      return "no map";
  }
};
