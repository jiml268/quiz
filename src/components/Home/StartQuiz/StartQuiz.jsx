import { useDispatch, useSelector, } from 'react-redux'
import { getCategoryPicked, getDifficultPicked, getAskQuestions } from '../../../redux/quiz/quizSelectors'
import { getQuestions } from '../../../redux/quiz/quizOperators';
import { useNavigate } from "react-router-dom";

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


    const handleClick = (event) => {
        const questionParms = { amount: showQuestionCount, cat_id: showCatsPicked, diff: setDiff}

       dispatch(getQuestions(questionParms))
    navigate("/quiz")
  };


     return (
         <>
          <button className={styles.button} onClick={handleClick}>Start Quiz</button>
         </>
       
 )
}

export default StartQuiz