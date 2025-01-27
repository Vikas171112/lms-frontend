import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center py-12">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sigin
        </h2>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            value=""
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Email"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            value=""
            id="password"
            name="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Password"
            required
          />
        </div>
        <Link to="/notimplemented">
          <span className="text-blue-800">Forgot Password?</span>
        </Link>
        <button
          type="submit" // Set button type to submit
          className="bg-yellow-400 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg w-full mt-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Signin
        </button>
        <Link to="/signup">
          <span className="text-blue-800">Dont have an account?</span>
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
