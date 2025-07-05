import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://connections-api.goit.global",
});

const setAuthToken = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const deleteAuthToken = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

//Register

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (body, thunkAPI) => {
    try {
      const res = await api.post(body, "/users/signup");
      console.log(res);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//Login

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (body, thunkAPI) => {
    try {
      const res = await api.post(body, "/users/login");
      console.log(res);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//Refresh

export const refreshThunk = createAsyncThunk(
  "auth/register",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    try {
      const res = await api.post(token, "/users/current");
      console.log(res);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
