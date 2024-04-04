import { createSlice } from '@reduxjs/toolkit';
import {getCategories, getCatCount, getQuestions } from './quizOperators'

const initialState = {
      quizCategories: [],
        CategoryCount: [],
        quizQuestions: [],
        isloading: false,
};

const quizSlice = createSlice({
  name: 'task',
    initialState,
        reducers: {
               
    },
         extraReducers: builder =>
                builder
                         .addCase(getCategories.pending, (state, action) => { state.isloading = true; })
                         
                  .addCase(getCategories.fulfilled, (state, action) => {
                          if (action.payload.code === 200) {
                                  state.quizCategories = action.payload.data
                                  console.log(state.quizCategories)
                          }
                          state.isloading = false
      })
              .addCase(getCategories.rejected, (state, action) => {
      state.isloading = false
        
      }
                )
         
          .addCase(getCatCount.pending, (state, action) => { state.isloading = true; })
                         
                  .addCase(getCatCount.fulfilled, (state, action) => {
                          if (action.payload.code === 200) {
                                  state.CategoryCount = action.payload.data
                          }
                          state.isloading = false
      })
              .addCase(getCatCount.rejected, (state, action) => {
      state.isloading = false
        
      }
                )
          .addCase(getQuestions.pending, (state, action) => { state.isloading = true; })
                         
                  .addCase(getQuestions.fulfilled, (state, action) => {
                          if (action.payload.code === 200) {
                                  state.quizQuestions = action.payload.data
                                  
                          }
                          state.isloading = false
      })
              .addCase(getQuestions.rejected, (state, action) => {
      state.isloading = false
        
      }
                )
        
         
});
        //  export const {  } = quizSlice.actions;
  
export const taskReducer = quizSlice.reducer;