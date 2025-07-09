import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  logoutThunk,
  // refreshThunk,
  registerThunk,
} from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      //register
      .addCase(registerThunk.fulfilled, (state, actions) => {
        state.user = actions.payload.user;
        state.token = actions.payload.token;
        state.isLoggedIn = true;
      })
      //login
      .addCase(loginThunk.fulfilled, (state, actions) => {
        state.user = actions.payload.user;
        state.token = actions.payload.token;
        state.isLoggedIn = true;
      })
      // refreshing
      //
      //logout
      .addCase(logoutThunk.fulfilled, (state, actions) => {
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = slice.reducer;
