import { createSlice } from '@reduxjs/toolkit';
import { } from './quizOperators'

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
        
         
});
        //  export const {  } = quizSlice.actions;
  
export const taskReducer = quizSlice.reducer;