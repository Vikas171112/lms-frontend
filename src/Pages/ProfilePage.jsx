import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Slices/authSlice";
import { Link } from "react-router-dom"; // To navigate to other pages

function ProfilePage() {
  const user = useSelector((state) => state.auth.data);
  const enrolledCourses = user.enrolledCourses || [];
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 md:px-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Profile
        </h1>

        {/* Profile Info */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://via.placeholder.com/150" // You can replace with user's profile picture
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800">
            {user.name || "Anonymous"}
          </h2>
          <p className="text-lg text-gray-600">
            {user.email || "email@example.com"}
          </p>
        </div>

        {/* Enrolled Courses Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Enrolled Courses
          </h3>
          {enrolledCourses.length === 0 ? (
            <p className="text-gray-600">
              You have not enrolled in any courses yet.
            </p>
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
                    <p className="text-gray-600 text-sm">
                      {course.description}
                    </p>
                    <p className="mt-4 text-lg font-semibold text-blue-600">
                      ${course.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Profile Action Buttons */}
        <div className="flex justify-center gap-6">
          <Link
            to="/edit-profile"
            className="px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
          >
            Edit Profile
          </Link>
          <button
            onClick={handleLogout}
            className="px-6 py-3 rounded-lg bg-red-500 text-white hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
