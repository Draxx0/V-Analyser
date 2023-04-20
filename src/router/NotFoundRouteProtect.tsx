import { Navigate } from "react-router-dom";

const NotFoundRouteProtect = () => {
  if (!localStorage.getItem("player")) {
    return <Navigate to="/" />;
  } else {
    return <Navigate to="/dashboard/competitive" />;
  }
};

export default NotFoundRouteProtect;
