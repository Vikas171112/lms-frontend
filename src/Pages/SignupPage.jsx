import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../Redux/Slices/authSlice";

function SignupPage() {
  const [signupDetails, setSignupDetails] = useState({
    email: "",
    fullName: "",
    password: "",
    avatar: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      setSignupDetails({
        ...signupDetails,
        avatar: file,
      });
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSignupDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Signup Details:", signupDetails);
    dispatch(signupUser(signupDetails)).then(() => {
      navigate("/"); // Navigate to welcome page after signup
    }); // Log the signup details
    // Navigate to home or another page
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center py-12">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Register Yourself
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSignup}>
          <label htmlFor="image_uploads" className="cursor-pointer text-center">
            {previewImage ? (
              <img
                src={previewImage}
                alt="Preview"
                className="w-24 h-24 rounded-full mx-auto object-cover border border-gray-300"
              />
            ) : (
              <div className="w-24 h-24 rounded-full mx-auto bg-gray-300 flex items-center justify-center border border-gray-300">
                <FaRegUserCircle className="text-4xl text-gray-500" />
              </div>
            )}
            <span className="block mt-2 text-sm text-gray-600">
              Choose a Profile Picture
            </span>
          </label>
          <input
            type="file"
            id="image_uploads"
            className="hidden"
            accept="image/*" // Accept only image files
            onChange={handleImageChange}
          />
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              onChange={handleOnChange}
              type="email"
              value={signupDetails.email}
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              onChange={handleOnChange}
              value={signupDetails.fullName}
              name="fullName"
              type="text"
              id="fullName"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Name"
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
              onChange={handleOnChange}
              value={signupDetails.password}
              name="password"
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a Password"
              required
            />
          </div>
          <button
            onClick={handleSignup}
            type="submit" // Set button type to submit
            className="bg-yellow-400 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg w-full mt-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Create Account
          </button>
          <p className="text-black text-lg">
            Already have an account?
            <Link className="text-blue-800" to="/login">
              {" "}
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
