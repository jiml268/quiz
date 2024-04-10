import CountDown from "../../components/Quiz/CountDown/CountDown"
import Counters from "../../components/Quiz/Counters/Counters"
import styles from './Quix.module.css'

function Quiz() {

   

    return (
        <>  
            <div className={styles.counter}>
            <CountDown />   
                <Counters />
                </div>

</>         
 )
}

export default Quiz