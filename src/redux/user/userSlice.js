import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoggedIn: true
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.categoryPicked = action.payload;
    },
   
  },
  extraReducers: (builder) =>
    builder
     
});
export const { setIsLoggedIn, } = userSlice.actions;

export const userReducer = userSlice.reducer;
