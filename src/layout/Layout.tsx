import { ReactNode, FC, useContext } from "react";
import Navbar from "../components/Navbar";
import { PlayerContext } from "../contexts/PlayerContext";

type IProps = {
  children: ReactNode;
};

const Layout: FC<IProps> = ({ children }) => {
  const { player } = useContext(PlayerContext);
  return (
    <>
      {player !== null && <Navbar />}

      <main className="ml-1-12 w-full mr-7">
        <>{children}</>
      </main>
    </>
  );
};

export default Layout;
