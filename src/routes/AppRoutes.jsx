import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  DashboardPage,
  SignUpPage,
  LogInPage,
  ForgetPasswordPage,
  BookLandingPage,
  Books,
  EditBookPage,
  NewBookPage,
  ReviewsPage,
  UserPage,
  Profile,
  BorrowPage,
} from "../pages";
import { DefaultLayout } from "../components/layouts/DefaultLayout";
import { UserLayout } from "../components/layouts/UserLayout";

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
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="books" element={<Books />} />
        <Route path="edit-book" element={<EditBookPage />} />
        <Route path="new-book" element={<NewBookPage />} />
        <Route path="book-landing" element={<BookLandingPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="all" element={<UserPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="borrow-history" element={<BorrowPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
