export const agentIconFunction = (agent: string) => {
  //swicth case that return link to the agent icon
  switch (agent) {
    case "Jett":
      return "/src/assets/images/agents/jett.webp";
      break;

    case "Brimstone":
      return "/src/assets/images/agents/brimstone.webp";
      break;

    case "Sage":
      return "/src/assets/images/agents/sage.webp";
      break;

    case "Omen":
      return "/src/assets/images/agents/omen.webp";
      break;

    case "Phoenix":
      return "/src/assets/images/agents/phoenix.webp";
      break;

    case "Raze":
      return "/src/assets/images/agents/raze.webp";
      break;

    case "Reyna":
      return "/src/assets/images/agents/reyna.webp";
      break;

    case "Viper":
      return "/src/assets/images/agents/viper.webp";

      break;

    case "Cypher":
      return "/src/assets/images/agents/cypher.webp";
      break;

    case "Sova":
      return "/src/assets/images/agents/sova.webp";
      break;

    case "Killjoy":
      return "/src/assets/images/agents/killjoy.webp";
      break;

    case "Breach":
      return "/src/assets/images/agents/breach.webp";
      break;

    case "Skye":
      return "/src/assets/images/agents/skye.webp";
      break;

    case "Yoru":
      return "/src/assets/images/agents/yoru.webp";
      break;

    case "Astra":
      return "/src/assets/images/agents/astra.webp";

      break;

    case "KAY/O":
      return "/src/assets/images/agents/kayo.webp";
      break;

    case "Chamber":
      return "/src/assets/images/agents/chamber.webp";
      break;

    case "Harbor":
      return "/src/assets/images/agents/harbor.webp";
      break;

    case "Fade":
      return "/src/assets/images/agents/fade.webp";
      break;

    case "Gekko":
      return "/src/assets/images/agents/gekko.webp";
      break;

    case "Neon":
      return "/src/assets/images/agents/neon.webp";
      break;

    default:
      return "notfound";
      break;
  }
};
