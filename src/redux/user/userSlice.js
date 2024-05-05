import { createSlice } from "@reduxjs/toolkit";
import { usersLogin, userRegister, userLogout  } from "./userOperators";

const initialState = {
  isLoggedIn: false,
  isloading: false,
  userName: "",
  currentLocation: ""
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },

    setCurrentLocation: (state, action) => {
      state.categoryPicked = action.payload;
    },
   
  },
  extraReducers: (builder) =>
    builder
      .addCase(usersLogin.pending, (state, action) => {
        state.isloading = true;
      })

      .addCase(usersLogin.fulfilled, (state, action) => {
        console.log(action)
        state.isLoggedIn = true
        state.userName= action.payload.data.data.username
        state.isloading = false;
         console.log(state.userName)
                console.log(action.payload.data.data.username)
      })
      .addCase(usersLogin.rejected, (state, action) => {

        state.isloading = false;
      })
     
   .addCase(userRegister.pending, (state, action) => {
        state.isloading = true;
      })

      .addCase(userRegister.fulfilled, (state, action) => {
         state.isLoggedIn = true
        state.isloading = false;
        state.userName = action.payload.data.data.username
        console.log(state.userName)
                console.log(action.payload.data.data.username)


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
export const { setIsLoggedIn, setCurrentLocation } = userSlice.actions;

export const userReducer = userSlice.reducer;
