import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, DashboardPage } from "../pages";
import { DefaultLayout } from "../components/layouts/DefaultLayout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes/ pages */}
      <Route
        path="/"
        element={
          <DefaultLayout>
            <HomePage />
          </DefaultLayout>
        }
      />

      {/* private pages */}
      <Route path="/user" element={<DashboardPage />} />
    </Routes>
  );
};

export default AppRoutes;
