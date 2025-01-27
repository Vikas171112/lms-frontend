import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link for navigation

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 mb-8">
        The page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="bg-slate-500 px-3 text-gray-950"
      >
        Go back{" "}
      </button>
    </div>
  );
}

export default NotFoundPage;
