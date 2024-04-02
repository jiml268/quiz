import { configureStore } from '@reduxjs/toolkit';
import { taskReducer } from './quiz/quizSlice'

export const store = configureStore({
    reducer: { 
     task: taskReducer
    },

});