// /src/pages/CourseDescriptionPage.js
import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { selectCourseById } from "../Redux/Slices/courseSlice";

function CourseDescriptionPage() {
  const { id } = useParams(); // Get course ID from URL
  const navigate = useNavigate();

  // Fetch course details using the selector
  const course = useSelector((state) => selectCourseById(state, parseInt(id)));

  if (!course) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold">Course not found</h1>
        <button
          className="ml-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 md:px-12">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {course.title}
        </h1>
        <p className="text-gray-600 text-lg mb-6">{course.description}</p>
        <p className="text-2xl font-semibold text-blue-600 mb-6">
          Price: ${course.price}
        </p>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          onClick={() => alert(`Enrolled in ${course.title}`)}
        >
          Enroll Now
        </button>
        <button
          className="ml-4 bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400"
          onClick={() => navigate("/")}
        >
          Back to Courses
        </button>
      </div>
    </div>
  );
}

export default CourseDescriptionPage;
