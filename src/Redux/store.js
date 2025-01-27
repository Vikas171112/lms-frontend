import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Redux/Slices/authSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devtools: true,
});
export default store;
