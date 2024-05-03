import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const userRegister = createAsyncThunk(
  "/createUser",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`/createUser`, credentials);
    return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const usersLogin = createAsyncThunk(
  "/getUser",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`/getUser`, credentials);
    return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogout = createAsyncThunk(
  "/logoutUser",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`/logoutUser`);
    return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);