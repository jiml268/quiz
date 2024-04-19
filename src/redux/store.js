import { configureStore } from '@reduxjs/toolkit';
import { quizReducer } from './quiz/quizSlice'
import { userReducer } from './user/userSlice'

export const store = configureStore({
    reducer: { 
        quiz: quizReducer,
        user: userReducer
    },

});