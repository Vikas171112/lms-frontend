import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCourses } from "../Redux/Slices/courseSlice";

function CourseForm() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.title || !formData.description || !formData.price) {
      setError("Please fill in all required fields.");
      return;
    }

    if (isNaN(formData.price) || parseFloat(formData.price) <= 0) {
      setError("Please enter a valid positive price.");
      return;
    }

    // Dispatch action to add course
    dispatch(addCourses({ ...formData, price: parseFloat(formData.price) }));

    // Reset form
    setFormData({
      title: "",
      description: "",
      price: "",
      image: "",
    });

    setSuccess("Course added successfully!");
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Add a New Course</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <textarea
          name="description"
          placeholder="Course Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Course Price ($)"
          value={formData.price}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Course Image URL (optional)"
          value={formData.image}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Add Course
        </button>
      </form>
    </div>
  );
}

export default CourseForm;
