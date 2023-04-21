import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "../pages/Auth";
import ProtectedRoute from "./ProtectedRoute";
import DashboardCompetitive from "../pages/Dashboard/Dashboard-competitive";
import NotFoundRouteProtect from "./NotFoundRouteProtect";
import DashboardUnrated from "../pages/Dashboard/Dashboard-unrated";
import News from "../pages/News";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route
        path="/dashboard/competitive"
        element={
          <ProtectedRoute>
            <DashboardCompetitive />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/unrated"
        element={
          <ProtectedRoute>
            <DashboardUnrated />
          </ProtectedRoute>
        }
      />

      <Route
        path="/news"
        element={
          <ProtectedRoute>
            <News />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFoundRouteProtect />} />
    </Routes>
  );
};

export default Router;
