import { BsFillGridFill } from "react-icons/bs";
import { IoMapSharp } from "react-icons/io5";
import { IoNewspaperSharp } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { RiInformationFill } from "react-icons/ri";
import Logo from "/assets/images/valorant.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

const Navbar = () => {
  const { Signout } = useContext(PlayerContext);
  return (
    <nav className="w-1/12 bg-primary h-screen z-10 fixed p-5 flex flex-col justify-between items-center md:w-full md:h-16 md:flex-row md:p-10">
      <img src={Logo} alt="" className="w-14" />

      <ul className="flex flex-col gap-10 relative bottom-20 md:flex-row md:bottom-0">
        <li title="game stats">
          <NavLink to={"/dashboard"}>
            <BsFillGridFill className="2sm: w-6" />
          </NavLink>
        </li>

        <li title="map stats">
          <NavLink to={"/maps"}>
            <IoMapSharp className="2sm: w-6" />
          </NavLink>
        </li>

        <li title="news about game">
          <NavLink to={"/news"}>
            <IoNewspaperSharp className="2sm: w-6" />
          </NavLink>
        </li>
      </ul>

      <div className="signout" onClick={Signout}>
        <IoLogOut className="2sm: w-6" />
      </div>
    </nav>
  );
};

export default Navbar;
