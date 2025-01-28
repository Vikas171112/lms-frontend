import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../../Pages/Home";
import SignupPage from "../../Pages/SignupPage";
import LoginPage from "../../Pages/LoginPage";
import NotFoundPage from "../../Pages/NotFoundPage";
import CourseListPage from "../../Pages/CoursePageList";
import CourseDescriptionPage from "../../Pages/CourseDescriptionPage";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/courselist" element={<CourseListPage />} />
          <Route path="/course/:id" element={<CourseDescriptionPage />} />
        </Route>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default Routing;
