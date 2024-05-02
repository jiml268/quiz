import { configureStore  } from '@reduxjs/toolkit';
import { quizReducer } from './quiz/quizSlice'
import { userReducer } from './user/userSlice'
import { scoresReducer } from './scores/scoresSlice'


export const store = configureStore({
    reducer: {
        quiz: quizReducer,
        user: userReducer,
        scores: scoresReducer
    },
     middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      
      serializableCheck: false,
    }),  
    

});