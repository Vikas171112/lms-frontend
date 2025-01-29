// courseSlice.js

import { createSlice } from "@reduxjs/toolkit";

// Initial state for courses
const initialState = {
  courses: [
    {
      id: 1,
      title: "React for Beginners",
      description: "Learn React by building practical projects.",
      price: 29.99,
      image: "https://via.placeholder.com/300x200?text=React+for+Beginners",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      description: "Deep dive into JavaScript's advanced concepts.",
      price: 49.99,
      image: "https://via.placeholder.com/300x200?text=Advanced+JavaScript",
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      description: "Master the art of UI/UX design for web and mobile apps.",
      price: 39.99,
      image: "https://via.placeholder.com/300x200?text=UI/UX+Design",
    },
    {
      id: 4,
      title: "Python for Data Science",
      description:
        "Learn Python programming and its application in data science.",
      price: 59.99,
      image: "https://via.placeholder.com/300x200?text=Python+for+Data+Science",
    },
    {
      id: 5,
      title: "Digital Marketing Essentials",
      description:
        "Learn the basics of digital marketing and how to grow a business online.",
      price: 19.99,
      image: "https://via.placeholder.com/300x200?text=Digital+Marketing",
    },
    {
      id: 6,
      title: "Introduction to Machine Learning",
      description:
        "Learn the fundamentals of machine learning and data analysis.",
      price: 49.99,
      image: "https://via.placeholder.com/300x200?text=Machine+Learning",
    },
  ],
  selectedCourse: null, // Store selected course
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourses(state, action) {
      state.courses = action.payload;
    },
    setSelectedCourse(state, action) {
      state.selectedCourse = action.payload;
    },
    addCourses(state, action) {
      const newCourse = {
        id: state.courses.length //checking if the array is empty
          ? state.courses[state.courses.length - 1].id + 1
          : 1,
        ...action.payload,
      };
      state.courses.push(newCourse);
    },
  },
});

export const { setCourses, setSelectedCourse, addCourses } =
  courseSlice.actions;
export const selectAllCourses = (state) => state.course.courses;
export default courseSlice.reducer;
