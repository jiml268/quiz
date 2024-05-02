import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getScores = createAsyncThunk(
  "/getscores",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/getscores`);

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const setScores = createAsyncThunk(
  "/setscores",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`/setscores`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);