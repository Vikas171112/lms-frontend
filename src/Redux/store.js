import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Redux/Slices/authSlice.js";
import courseReducer from "../Redux/Slices/courseSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
  },
  devtools: true,
});
export default store;
