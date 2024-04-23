import styles from './buttons.module.css'

import { resetState,  }
    from '../../../redux/quiz/quizSlice'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { getIsLoggedIn } from '../../../redux/user/userSelectors';

function Buttons() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const personLoggedIn = useSelector(getIsLoggedIn)

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
      console.log('Top score clicked')
    }


 return (
     <div className={styles.allButtons}>
         <button className={styles.button} onClick={clickReview}
         >review Quiz</button>
          <button className={styles.button} onClick={clickAgain}
         >Play Again</button>
         <button className={`${styles.button} ${personLoggedIn ? "" : styles.noTop}`}  onClick={clickTop} style={{ display: { showTop } }}
         >Top Scores</button>
     </div>
 )
}



export default Buttons

 