import { getCorrectAnswers, getIncorrectAnswers, getAskQuestions } from "../../../redux/quiz/quizSelectors"
import { useSelector, } from 'react-redux'
import styles from './Counters.module.css'
 
function Counters() {
    const questions = useSelector(getAskQuestions)
    const correct = useSelector(getCorrectAnswers)
    const incorrect = useSelector(getIncorrectAnswers)

   

    return (
        <div className={styles.counters}>  
            <div className={styles.counterGroup}>
                <h3 className={styles.header}>Correct</h3>
                <p className={styles.counterBox}>{correct}</p>
            </div>
            <div className={styles.counterGroup}>
                <h3>InCorrect</h3>
                <p className={styles.counterBox}>{incorrect}</p>
            </div>
             <div className={styles.counterGroup}>
                <h3>Score</h3>
                <p className={styles.counterBox}>{(correct * 100 / questions).toFixed(1) }%</p>
            </div>
</div>         
 )
}

export default Counters