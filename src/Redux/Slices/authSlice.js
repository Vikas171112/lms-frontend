import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to handle signup process
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userDetails) => {
    // Fake server delay
    const fakeDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await fakeDelay(5000);

    return userDetails; // Return the entire user details
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
    : {}, // Parse JSON data if exists
  loading: false, // For loading state during signup
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("data");
      state.isloggedIn = false;
      state.data = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isloggedIn = true; // User logged in
        state.data = action.payload; // Save entire user details in data
        state.loading = false; // Loading complete

        // Save to localStorage for persistence
        localStorage.setItem("isloggedIn", "true");
        localStorage.setItem("data", JSON.stringify(state.data));
      })
      .addCase(signupUser.rejected, (state) => {
        state.loading = false; // Stop loading if signup fails
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
export const { logout } = authSlice.actions;
export default authSlice.reducer;
