import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../../Pages/Home";
import SignupPage from "../../Pages/SignupPage";
import LoginPage from "../../Pages/LoginPage";
import NotFoundPage from "../../Pages/NotFoundPage";
import CourseListPage from "../../Pages/CoursePageList";
import CourseDescriptionPage from "../../Pages/CourseDescriptionPage";
import MyCoursesPage from "../../Pages/MyCoursesPage";
import ProfilePage from "../../Pages/ProfilePage";
import CourseForm from "../../Pages/CourseForm";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/courselist" element={<CourseListPage />} />
          <Route path="/course/:id" element={<CourseDescriptionPage />} />
          <Route path="/mycourses" element={<MyCoursesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/createCourse" element={<CourseForm />} />
        </Route>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default Routing;
