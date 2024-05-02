import { createSlice } from "@reduxjs/toolkit";
import { usersLogin, userRegister, userLogout  } from "./userOperators";

const initialState = {
  isLoggedIn: false,
  isloading: false
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
      .addCase(usersLogin.pending, (state, action) => {
    console.log('pending')
        state.isloading = true;
      })

      .addCase(usersLogin.fulfilled, (state, action) => {
            console.log('fullfiled')

        state.isloading = false;
      })
      .addCase(usersLogin.rejected, (state, action) => {
            console.log('rejected')

        state.isloading = false;
      })
     
   .addCase(userRegister.pending, (state, action) => {
        state.isloading = true;
      })

      .addCase(userRegister.fulfilled, (state, action) => {
        
        state.isloading = false;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.isloading = false;
      })
  .addCase(userLogout.pending, (state, action) => {
        state.isloading = true;
      })

      .addCase(userLogout.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.isloading = false;
      })
      .addCase(userLogout.rejected, (state, action) => {
        state.isloading = false;
      })
});
export const { setIsLoggedIn, } = userSlice.actions;

export const userReducer = userSlice.reducer;