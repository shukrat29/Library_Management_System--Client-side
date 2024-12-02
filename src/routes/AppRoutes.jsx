import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  DashboardPage,
  SignUpPage,
  LogInPage,
  ForgetPasswordPage,
  BookLandingPage,
} from "../pages";
import { DefaultLayout } from "../components/layouts/DefaultLayout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes/ pages */}
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<LogInPage />} />
        <Route path="forget-password" element={<ForgetPasswordPage />} />
      </Route>

      {/* private pages */}
      <Route path="/user" element={<DashboardPage />} />
    </Routes>
  );
};

export default AppRoutes;
