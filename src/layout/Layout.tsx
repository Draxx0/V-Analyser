import { useContext } from "react";
import Navbar from "../components/common/Navbar";
import { PlayerContext } from "../contexts/PlayerContext";

const Layout = ({ children }: { children: React.ReactElement }) => {
  const { player } = useContext(PlayerContext);
  return (
    <>
      {player && <Navbar />}

      <main className="ml-[8%] w-full mr-7 md:mx-10 md:mt-20 md:m-auto">
        {children}
      </main>
    </>
  );
};

export default Layout;
