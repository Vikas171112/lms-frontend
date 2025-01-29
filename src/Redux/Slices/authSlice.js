// authSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for signup process (already defined earlier)
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userDetails) => {
    const fakeDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await fakeDelay(5000);

    return { ...userDetails, enrolledCourses: [] }; // Return user details with enrolledCourses
  }
);

export const LoginUser = createAsyncThunk(
  "auth/LoginUser",
  async (userDetails) => {
    const fakeDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await fakeDelay(5000);
    return userDetails;
  }
);

// Initial state
const initialState = {
  isloggedIn: localStorage.getItem("isloggedIn") === "true" || false, // Convert to boolean
  data: localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : { enrolledCourses: [] }, // Ensure enrolledCourses is an empty array by default
  loading: false, // For loading state during signup
};

// Define the slice with reducers
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("data");
      state.isloggedIn = false;
      state.data = { enrolledCourses: [] }; // Reset enrolledCourses on logout
    },
    enrollIncourse(state, action) {
      // Add the selected course to the enrolledCourses array
      const course = action.payload;
      if (!state.data.enrolledCourses) {
        state.data.enrolledCourses = []; // Initialize the enrolledCourses array if it's empty
      }

      // Check if the course is already enrolled
      const isAlreadyEnrolled = state.data.enrolledCourses.some(
        (c) => c.id === course.id
      );

      if (!isAlreadyEnrolled) {
        state.data.enrolledCourses.push(course); // Add the course to enrolledCourses
        localStorage.setItem("data", JSON.stringify(state.data)); // Save updated data to localStorage
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isloggedIn = true;
        state.data = action.payload;
        state.loading = false;
        localStorage.setItem("isloggedIn", "true");
        localStorage.setItem("data", JSON.stringify(state.data));
      })
      .addCase(signupUser.rejected, (state) => {
        state.loading = false;
      });
    builder
      .addCase(LoginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.isloggedIn = true;
        localStorage.setItem("isloggedIn", "true");
        localStorage.setItem("data", JSON.stringify(state.data));
      })
      .addCase(LoginUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

// Export the enrollIncourse action for use in components
export const { logout, enrollIncourse } = authSlice.actions;

export default authSlice.reducer;
