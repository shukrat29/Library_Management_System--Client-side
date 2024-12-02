import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isAuth = false;
  return isAuth ? children : <Navigate to="/login" />;
};
