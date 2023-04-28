import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateLayout from "./router/PrivateLayout";
import LoginPage from "./page/LoginPage";
import ForgotPasswordPage from "./page/ForgotPasswordPage";
import { useSelector } from "react-redux";

const App = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);

  const PrivateRoute = (props) => {
    if (isLogin) {
      return <Route {...props} element={<PrivateLayout />} />;
    }
    return <Navigate to="/login" replace />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<PrivateRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
