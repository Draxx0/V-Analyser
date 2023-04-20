import { BsFillGridFill } from "react-icons/bs";
import { TbSwords } from "react-icons/tb";
import { TbRobot } from "react-icons/tb";
import { IoLogOut } from "react-icons/io5";
import Logo from "../assets/images/valorant.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

const Navbar = () => {
  const { Signout } = useContext(PlayerContext);
  return (
    <nav className="w-1/12 bg-primary h-screen fixed p-5 flex flex-col justify-between items-center ">
      <img src={Logo} alt="" className="w-14" />

      <ul className="flex flex-col gap-10 relative bottom-20">
        <li>
          <NavLink to={"/dashboard"}>
            <BsFillGridFill />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/match"}>
            <TbSwords />
          </NavLink>
        </li>

        <li>
          <NavLink to={"/agents"}>
            <TbRobot />
          </NavLink>
        </li>
      </ul>

      <div className="signout" onClick={Signout}>
        <IoLogOut />
      </div>
    </nav>
  );
};

export default Navbar;
