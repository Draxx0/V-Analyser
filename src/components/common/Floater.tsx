import { twMerge } from "tailwind-merge";

const Floater = ({ classes }: { classes: string }) => {
 return (
  <img src="./assets/images/valorant.webp" alt="" className={twMerge(`absolute opacity-20 filter blur-xl w-36 -z-10 select-none animate-soft-pulse`, classes)} />
 );
}

export default Floater;