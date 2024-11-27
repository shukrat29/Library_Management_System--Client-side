import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes/ pages */}
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
