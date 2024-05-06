import { createSlice } from "@reduxjs/toolkit";
import { getCategories, getCatCount, getQuestions, sethighScore } from "./quizOperators";


const initialState = {
  quizCategories: [],
  CategoryCount: [],
  quizQuestions: [],
  isloading: false,
    categoryPicked: [],
  difficultPicked: "",
availableQuestion: 0,
  askQuestions: 1,
  correctAnswers: 0,
  incorrectAnswers: 0,
  quizComplete: false,
  answersPicked:[]
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
    setQuizQuestions: (state, action) => {
      state.quizQuestions = action.payload;
    },
    setQuizComplete: (state, action) => {
      state.quizComplete = action.payload;

    },
    setAnswersPicked: (state, action) => {
      
       state.answersPicked.push(action.payload);
    },
    resetState: (state, action) => {
      state.CategoryCount = []
      state.quizQuestions = []
      state.isloading = false
      state.categoryPicked = []
      state.difficultPicked = ""
      state.availableQuestion = 0
      state.askQuestions = 1
      state.correctAnswers = 0
      state.incorrectAnswers = 0
      state.quizComplete = false
      state.answersPicked = []
    },
   
    resetTest: (state, action) => {
      
      state.correctAnswers = 0
      state.incorrectAnswers = 0
      state.answersPicked= []

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

          let questCnt = 0
          switch (state.difficultPicked) {
            
            case "Any":
              questCnt =
                action.payload.data.category_question_count.total_question_count;
              break;
            case "Easy":
              questCnt =
                action.payload.data.category_question_count.total_easy_question_count;
              break;
            case "Medium":
              questCnt =
                action.payload.data.category_question_count.total_medium_question_count;
              break;
            case "Hard":
              questCnt =
                action.payload.data.category_question_count.total_hard_question_count;
              break;
            default:
              questCnt = 0;
          }
            questCnt < 50 ?
            state.availableQuestion = questCnt : state.availableQuestion = 50

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
       
        state.isloading = false;
      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.isloading = false;
      })
  .addCase(sethighScore.pending, (state, action) => {
        state.isloading = true;
      })

  .addCase(sethighScore.fulfilled, (state, action) => {
       
        state.isloading = false;
      })
      .addCase(sethighScore.rejected, (state, action) => {
        state.isloading = false;
      }),
});
export const { setCategory, setDifficult, setAskQuestions, setCorrectAnswers, setIncorrectAnswers, setQuizQuestions, setQuizComplete,
setAnswersPicked, resetState, resetTest} = quizSlice.actions;

export const quizReducer = quizSlice.reducer;
