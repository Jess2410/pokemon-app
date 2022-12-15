import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthenticationService from "./services/authentification-service";

const PrivateRoute = ({ redirectPath = "/login" }) => {
  if (!AuthenticationService.isAuthentificated) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};
export default PrivateRoute;
