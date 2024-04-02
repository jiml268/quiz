import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3030//api/quiz';

export const getheader = createAsyncThunk(
  'user/getheader',
     async (credentials, thunkAPI) => {
       try {
      const response = await axios.post(
        `/getHeader`, credentials
         );
      return response.data;
       } catch (error) {
              

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


