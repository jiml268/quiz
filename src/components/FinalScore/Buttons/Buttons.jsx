import styles from './buttons.module.css'
import {  getAnswersPicked } from "../../../redux/quiz/quizSelectors"
import {   getCategoryPicked } from '../../../redux/quiz/quizSelectors'

import { resetState,  }
    from '../../../redux/quiz/quizSlice'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { getIsLoggedIn, getUserName } from '../../../redux/user/userSelectors';
import { getCorrectAnswers, getAskQuestions } from '../../../redux/quiz/quizSelectors'
import { sethighScore } from '../../../redux/quiz/quizOperators';
import { toast } from 'react-toastify';


function Buttons() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const personLoggedIn = useSelector(getIsLoggedIn)
    const quizAnswersPicked = useSelector(getAnswersPicked)
    const wasQuestionAnsered = quizAnswersPicked.length > 0
    const currentUser = useSelector(getUserName)
    const currentCategoryPicked = useSelector(getCategoryPicked)
    const currentCorrectAnswers = useSelector(getCorrectAnswers)
    const currentAskQuestions = useSelector(getAskQuestions)
const [scoreSaved, setScoreSaved] = useState(false)

    const [showTop, setShowTop] = useState(false)
      useEffect(() => {
       setShowTop(personLoggedIn)
    }, [personLoggedIn])
   



    const clickAgain = () => {
       
        dispatch(resetState())
        navigate("/")
    }

    const clickReview = () => {
     navigate("/review")
    }

const clickTop = () => {
      navigate("/TopScores")
    }

    const clickSave = async() => {
        setScoreSaved(true)
            const catName = currentCategoryPicked.name.split("Entertainment: ").pop()

        const scoreTosave = { username: currentUser, category: catName, numOfQuestions: currentAskQuestions, numCorrect: currentCorrectAnswers, score: 100 / currentAskQuestions * currentCorrectAnswers }
        const result = await dispatch(sethighScore(scoreTosave))
        if (result.payload.code === 201) {
            toast.success("Score Saved", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",

            });
        }
      }


 return (
     <div className={styles.allButtons}>
         <button className={styles.button} onClick={clickReview} disabled={!wasQuestionAnsered}
         >review Quiz</button>
          <button className={styles.button} onClick={clickAgain}
         >Play Again</button>
          <button className={`${styles.button} ${personLoggedIn ? "" : styles.noTop}`}  onClick={clickSave} style={{ display: { showTop } }} disabled={scoreSaved}
         >Save Score</button>
         <button className={`${styles.button} ${personLoggedIn ? "" : styles.noTop}`}  onClick={clickTop} style={{ display: { showTop } }}
         >Top Scores</button>
     </div>
 )
}



export default Buttons

 