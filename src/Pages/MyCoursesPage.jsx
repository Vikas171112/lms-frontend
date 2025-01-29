import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/Slices/authSlice";
import { Link } from "react-router-dom"; // To navigate back to Course List

function MyCoursesPage() {
  const enrolledCourses = useSelector(
    (state) => state.auth.data.enrolledCourses || []
  );
  const dispatch = useDispatch();

  const handleUnenroll = (courseId) => {
    // You can dispatch an action to remove the course from the enrolledCourses list
    // Example: dispatch(unenrollCourse(courseId));
    alert("Unenrolled from course with ID: " + courseId);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 md:px-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        My Enrolled Courses
      </h1>

      {/* Enrolled Courses Section */}
      <div className="container mx-auto">
        {enrolledCourses.length === 0 ? (
          <div className="text-center text-lg text-gray-600">
            <p>You are not enrolled in any courses yet.</p>
            <Link
              to="/courselist" // Link to Course List Page
              className="mt-4 text-blue-500 hover:text-blue-600"
            >
              Browse Available Courses
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enrolledCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{course.description}</p>
                  <p className="mt-4 text-lg font-semibold text-blue-600">
                    ${course.price}
                  </p>

                  {/* Unenroll Button */}
                  <button
                    onClick={() => handleUnenroll(course.id)}
                    className="mt-4 px-6 py-3 rounded-lg bg-red-500 text-white hover:bg-red-600"
                  >
                    Unenroll
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyCoursesPage;
