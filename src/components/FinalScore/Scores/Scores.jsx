import styles from './Scores.module.css'
import {  getCorrectAnswers, getAskQuestions } from '../../../redux/quiz/quizSelectors'
import { useSelector } from 'react-redux'
import ShowFireworks from '../ShowFireworks/ShowFireworks'


function Scores() {
    const showCorrectAnswers = useSelector(getCorrectAnswers)
    const showGetAskQuestion = useSelector(getAskQuestions)
const yourScore = (100/showGetAskQuestion*showCorrectAnswers).toFixed(2)
   

 return (
     <div className={styles.scores}>
         {showCorrectAnswers === showGetAskQuestion &&
             <div className={styles.showFireWorks} >
                 <ShowFireworks />
             </div>}
         <div className={`${styles.box} ${showCorrectAnswers === showGetAskQuestion ? styles.showFirework : ""}`}>
         <div className={styles.box} >
             <h3>Your Score</h3>
             <h3>{yourScore}%</h3>
         </div>
          <div>
             <h3>Correct Answers</h3>
             <h3>{showCorrectAnswers}</h3>
        </div>
</div>
</div>         
 )
}

export default Scores