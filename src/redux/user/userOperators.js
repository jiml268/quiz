import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const userRegister = createAsyncThunk(
  "/createUser",
  async (credentials, thunkAPI) => {
    try {
      console.log('credentials', credentials)
      const response = await axios.post(`/createUser`, credentials);
      console.log('response', response)
    return response;
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const usersLogin = createAsyncThunk(
  "/getUser",
  async (credentials, thunkAPI) => {
    console.log("credentials", credentials)
    try {
      const response = await axios.post(`/getUser`, credentials);
      console.log('response', response)
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
      console.log('response', response)
    return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);