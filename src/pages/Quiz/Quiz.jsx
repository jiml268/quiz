import CountDown from "../../components/Quiz/CountDown/CountDown"
import Counters from "../../components/Quiz/Counters/Counters"
import Questions from "../../components/Quiz/Questions/Questions"
import styles from './Quix.module.css'

function Quiz() {

   

    return (
        <>  
            <div className={styles.counter}>
            <CountDown />   
                <Counters />
            </div>
            <div className={styles.questions}>
                <Questions/>
            </div>

</>         
 )
}

export default Quiz