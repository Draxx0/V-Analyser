import { NavLink } from "react-router-dom";

const DashboardNav = () => {
  return (
    <nav className="w-fit bg-primary p-3 flex gap-5 rounded-xl ">
      <NavLink
        to={"/dashboard/competitive"}
        className="uppercase text-gray font-bold hover:dashboard-link-hover dashboard-link"
      >
        competitive
      </NavLink>

      <NavLink
        to={"/dashboard/unrated"}
        className="uppercase text-gray font-bold hover:dashboard-link-hover dashboard-link"
      >
        unrated
      </NavLink>

      <NavLink
        to={"/dashboard/deathmatch"}
        className="uppercase text-gray font-bold hover:dashboard-link-hover dashboard-link"
      >
        deathmatch
      </NavLink>

      <NavLink
        to={"/dashboard/spike-rush"}
        className="uppercase text-gray font-bold hover:dashboard-link-hover dashboard-link"
      >
        spike rush
      </NavLink>

      <NavLink
        to={"/dashboard/escalation"}
        className="uppercase text-gray font-bold hover:dashboard-link-hover dashboard-link"
      >
        escalation
      </NavLink>
    </nav>
  );
};

export default DashboardNav;
