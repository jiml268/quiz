import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:3030/api/quiz";
// axios.defaults.baseURL = "https://quiz-backend-zi2r.onrender.com/api/quiz"

export const getCategories = createAsyncThunk(
  "/getCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/getCategories`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCatCount = createAsyncThunk(
  "/getCatCount",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`/getCatCount`, credentials);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sethighScore = createAsyncThunk(
  "/setScores",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`/setScores`, credentials);
      console.log('response', response)

      return response.data;
    } catch (error) {
            console.log('error', error)

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getQuestions = createAsyncThunk(
  "/getQuestions",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`/getQuestions`, credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
