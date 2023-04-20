import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

type IProps = {
  children: ReactNode;
};

const ProtectedRoute: FC<IProps> = ({ children }) => {
  if (!localStorage.getItem("player")) return <Navigate to="/" />;

  return <>{children}</>;
};

export default ProtectedRoute;
