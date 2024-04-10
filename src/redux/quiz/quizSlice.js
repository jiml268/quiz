import { createSlice } from "@reduxjs/toolkit";
import { getCategories, getCatCount, getQuestions } from "./quizOperators";

const initialState = {
  quizCategories: [],
  CategoryCount: [],
  quizQuestions: [],
  isloading: false,
  categoryPicked: 9,
  difficultPicked: "Any",
        availableQuestion: 0,
  askQuestions: 1,
  correctAnswers: 1,
  incorrectAnswers: 2
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.categoryPicked = action.payload;
    },
    setDifficult: (state, action) => {
      state.difficultPicked = action.payload;
          },
     setAskQuestions: (state, action) => {
      state.askQuestions = action.payload;
    },
     setCorrectAnswers: (state, action) => {
      state.correctAnswers = action.payload;
    },
     setIncorrectAnswers: (state, action) => {
      state.incorrectAnswers = action.payload;
          },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getCategories.pending, (state, action) => {
        state.isloading = true;
      })

      .addCase(getCategories.fulfilled, (state, action) => {
        if (action.payload.code === 200) {
          state.quizCategories = action.payload.data;
        }
        state.isloading = false;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isloading = false;
      })

      .addCase(getCatCount.pending, (state, action) => {
        state.isloading = true;
      })

      .addCase(getCatCount.fulfilled, (state, action) => {
        if (action.payload.code === 200) {
          state.CategoryCount = action.payload.data;


          switch (state.difficultPicked) {
            case "Any":
              state.availableQuestion =
                action.payload.data.category_question_count.total_question_count;
              break;
            case "Easy":
              state.availableQuestion =
                action.payload.data.category_question_count.total_easy_question_count;
              break;
            case "Medium":
              state.availableQuestion =
                action.payload.data.category_question_count.total_medium_question_count;
              break;
            case "Hard":
              state.availableQuestion =
                action.payload.data.category_question_count.total_hard_question_count;
              break;
            default:
              state.availableQuestion = 0;
          }
        }
        state.isloading = false;
      })
      .addCase(getCatCount.rejected, (state, action) => {
        state.isloading = false;
      })
      .addCase(getQuestions.pending, (state, action) => {
        state.isloading = true;
      })

                  .addCase(getQuestions.fulfilled, (state, action) => {
        if (action.payload.code === 200) {
          state.quizQuestions = action.payload.data;
        }
        state.isloading = false;
      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.isloading = false;
      }),
});
export const { setCategory, setDifficult, setAskQuestions, setCorrectAnswers, setIncorrectAnswers } = quizSlice.actions;

export const quizReducer = quizSlice.reducer;
