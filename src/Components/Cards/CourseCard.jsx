// /src/components/Cards/CourseCard.js
import React from "react";
import { useNavigate } from "react-router-dom";

function CourseCard({ course }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-80">
      <img
        src={course.image}
        alt={course.title}
        className="rounded-lg w-full h-40 object-cover mb-4"
      />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{course.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-blue-600 font-semibold">${course.price}</span>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          onClick={() => navigate(`/course/${course.id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
