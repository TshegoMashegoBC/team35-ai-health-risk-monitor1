import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

function PrivateRoute() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
