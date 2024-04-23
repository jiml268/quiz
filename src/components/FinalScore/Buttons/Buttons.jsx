import styles from './buttons.module.css'

import { setCategory, setDifficult, setAskQuestions, setCorrectAnswers, setIncorrectAnswers, setQuizQuestions, setAnswersPicked }
    from '../../../redux/quiz/quizSlice'
import { getIsLoggenIn, } from '../../../redux/user/userSelectors';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';


function Buttons() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    

    const [showTop, setShowTop] = useState(false)
    const personLoggedIn = useSelector(getIsLoggenIn)
      useEffect(() => {
       setShowTop(personLoggedIn)
    }, [personLoggedIn])
   



    const clickAgain = () => {
       
        dispatch(setCategory([]))
        dispatch(setDifficult(""))
        dispatch(setAskQuestions(1))
        dispatch(setCorrectAnswers(0))
        dispatch(setIncorrectAnswers(0))
        dispatch(setQuizQuestions([]))
        dispatch(setAnswersPicked([]))

        navigate("/")
    }

    const clickReview = () => {
     navigate("/review")
    }

const clickTop = () => {
      console.log('Top score clicked')
    }


 return (
     <div className={styles.allButtons}>
         <button className={styles.button} onClick={clickReview}
         >review Quiz</button>
          <button className={styles.button} onClick={clickAgain}
         >Play Again</button>
         <button className={styles.button} onClick={clickTop} style={{ display: { showTop } }}
         >Top Scores</button>
     </div>
 )
}

export default Buttons

 