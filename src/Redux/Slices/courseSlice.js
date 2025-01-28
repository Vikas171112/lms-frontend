import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseList: [
    {
      id: 1,
      title: "React for Beginners",
      description: "Learn the basics of React.js and build dynamic web apps.",
      price: 49.99,
      image: "https://via.placeholder.com/300x200.png?text=React+Course",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      description: "Master JavaScript and level up your development skills.",
      price: 79.99,
      image: "https://via.placeholder.com/300x200.png?text=JavaScript+Course",
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      description:
        "Discover the principles of great design and user experience.",
      price: 59.99,
      image: "https://via.placeholder.com/300x200.png?text=UI/UX+Course",
    },
    {
      id: 4,
      title: "Python for Data Science",
      description: "Analyze and visualize data using Python.",
      price: 99.99,
      image: "https://via.placeholder.com/300x200.png?text=Python+Course",
    },
  ],
};
const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
});
export const selectAllCourses = (state) => state.course.courseList;
export const selectCourseById = (state, courseId) =>
  state.course.courseList.find((course) => course.id === courseId);
export default courseSlice.reducer;
