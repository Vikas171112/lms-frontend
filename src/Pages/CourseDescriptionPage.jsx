// CourseDescriptionPage.jsx

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { setSelectedCourse } from "../Redux/Slices/courseSlice"; // Action to set selected course
import { enrollIncourse } from "../Redux/Slices/authSlice"; // Action to enroll

function CourseDescriptionPage() {
  const { id } = useParams(); // Get course ID from URL
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetch courses from the store (this can be from an API or a predefined array)
  const courses = useSelector((state) => state.course.courses);
  const course = courses.find((c) => c.id === parseInt(id)); // Find the selected course by ID

  // Update the selected course in Redux when the page loads
  useEffect(() => {
    if (course) {
      dispatch(setSelectedCourse(course)); // Set the selected course in Redux store
    }
  }, [dispatch, course]);

  const isLoggedIn = useSelector((state) => state.auth.isloggedIn);
  const enrolledCourses = useSelector(
    (state) => state.auth.data.enrolledCourses
  );

  // Handle course enrollment
  const handleEnroll = () => {
    if (isLoggedIn) {
      dispatch(enrollIncourse(course)); // Enroll the user in the course
      alert("Successfully Enrolled in the Course");
    } else {
      alert("Please login to enroll in any course");
      navigate("/login");
    }
  };

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
          onClick={handleEnroll}
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
