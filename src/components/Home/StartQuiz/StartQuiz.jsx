import { useDispatch, useSelector, } from 'react-redux'
import { getCategoryPicked, getDifficultPicked, getAskQuestions,  } from '../../../redux/quiz/quizSelectors'
import { getQuestions } from '../../../redux/quiz/quizOperators';
import { useNavigate } from "react-router-dom";
import { setQuizQuestions,  } from '../../../redux/quiz/quizSlice';

import styles from './StartQuiz.module.css'

function StartQuiz() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const showCatsPicked = useSelector(getCategoryPicked)
    const showDiffivultPicked = useSelector(getDifficultPicked)
    const showQuestionCount = useSelector(getAskQuestions)

    let setDiff = ""
    if (showDiffivultPicked === 'Any') {
        setDiff = ""
    } else {
        setDiff =showDiffivultPicked.toLowerCase()
    }


    const handleClick = async (event) => {
      


        if (showCatsPicked.length === 0 || showQuestionCount === 0 || showDiffivultPicked === '') {
             const message = showCatsPicked.length === 0 && showDiffivultPicked === '' ? "Please pick a Categorty and Difficulty level" :
                showCatsPicked.length === 0 ? "Please pick a Category" : "Please pick a Difficulty level";


          alert(message);
        } else {
            const questionParms = { amount: showQuestionCount, cat_id: showCatsPicked.id, diff: setDiff }

            const respone = await dispatch(getQuestions(questionParms))
            const returnQuestions = respone.payload.data
                   console.log('returnQuestions', returnQuestions)

            const setupQuestions = createquestions(returnQuestions)
            console.log('setupQuestions', setupQuestions)
            dispatch(setQuizQuestions(setupQuestions))

            // dispatch(setQuizComplete(false))

            navigate("/questions")
        }
    };
    

     function convertHTML(str) {
        const symbols = {
    "&#039;": "'",
    "&quot;": '"'
  }
  let newStr = str
  for (const symbol in symbols) {
    if (str.indexOf(symbol) >= 0) {
      newStr = str.replaceAll(symbol, symbols[symbol])
    }
  }
   return newStr;
}

    const createquestions = (returnQuestions) => {
        const allQuestion = []
        returnQuestions.map((item) => {
            const answers = []
            if (item.type === "boolean") {
                    answers.push('True', 'False')
            } else {

 const numberOfAnswers = item.incorrect_answers.length + 1
                const correctChoice = Math.floor(Math.random() * numberOfAnswers)
                for (let i = 0; i < numberOfAnswers; i++) {
                    if (i < correctChoice) {
                        answers.push( item.incorrect_answers[i] )
                    };
                    if (i === correctChoice) {
                        answers.push(item.correct_answer )
                    }
                    if (i > correctChoice) {
                        answers.push( item.incorrect_answers[i - 1])
                    }
                    
                   
                }
            }
            const shuffledAnsweres =  answers.length > 2 ? answers.sort((a, b) => 0.5 - Math.random()): answers
            const currentQuestion = { correct_answer: item.correct_answer, question: convertHTML(item.question), answers: shuffledAnsweres }
            allQuestion.push(currentQuestion)   
            return allQuestion
        })
    return (allQuestion)
    }


     return (
         <>
          <button className={styles.button} onClick={handleClick}>Start Quiz</button>
         </>
       
 )
}

export default StartQuiz