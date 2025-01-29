// /src/pages/CourseListPage.js
import React from "react";
import CourseCard from "../Components/Cards/CourseCard";
import { useSelector } from "react-redux";
import { selectAllCourses } from "../Redux/Slices/courseSlice";
import { useNavigate } from "react-router-dom";

function CourseListPage() {
  const courses = useSelector(selectAllCourses);
  // Access all courses

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Available Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 md:px-12">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CourseListPage;
