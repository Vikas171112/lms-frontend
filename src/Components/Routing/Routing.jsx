import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../../Pages/Home";
import SignupPage from "../../Pages/SignupPage";
import LoginPage from "../../Pages/LoginPage";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default Routing;
