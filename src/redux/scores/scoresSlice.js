import { createSlice } from "@reduxjs/toolkit";
import { getScores, setScores,  } from "./scoresOperators";


const initialState = {
    userScoresByCategory: [],
    userScoresAllCategory: [],
    allScoresByCategory: [],
    allScoresAllCategory: [],
    isloading: false
}

const scoresSlice = createSlice({
    name: "scores",
    initialState,
    reducers: {
    },
     extraReducers: (builder) =>
    builder
         .addCase(getScores.pending, (state, action) => {
        state.isloading = true;
      })

         .addCase(getScores.fulfilled, (state, action) => {
          
            state.isloading = false;

       
       
      })
         .addCase(getScores.rejected, (state, action) => {
                  

        state.isloading = false;
      })
     .addCase(setScores.pending, (state, action) => {
        state.isloading = true;
      })

      .addCase(setScores.fulfilled, (state, action) => {
        if (action.payload.code === 200) {
          state.quizCategories = action.payload.data;
        }
        state.isloading = false;
      })
      .addCase(setScores.rejected, (state, action) => {
        state.isloading = false;
      })

})

export const scoresReducer = scoresSlice.reducer;