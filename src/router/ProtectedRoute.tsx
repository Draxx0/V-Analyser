import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  if (!localStorage.getItem("player")) return <Navigate to="/" />;

  return <>{children}</>;
};

export default ProtectedRoute;
