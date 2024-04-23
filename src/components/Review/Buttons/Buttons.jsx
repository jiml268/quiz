import { useNavigate } from "react-router-dom";
import styles from './Buttons.module.css'
import { getAnswersPicked,  } from "../../../redux/quiz/quizSelectors"
import { useSelector } from "react-redux"
import prev from '../../../images/previous-arrow-backward.svg'
import next from '../../../images/next-arrow-forward.svg'
import { resetState}
    from '../../../redux/quiz/quizSlice'
    import { useDispatch } from 'react-redux'

function Buttons({ questionNum, setQuestionNum }) {
    const navigate = useNavigate();
     const dispatch = useDispatch()
    const quizAnswersPicked = useSelector(getAnswersPicked)    
    const handleHome = () => {
        dispatch(resetState())
       navigate("/")
   }
    
    const handlechange = e => {
   
 
        if (e.currentTarget.value === "Next") {
         setQuestionNum(prev=>prev+1)
        } else {
         setQuestionNum(prev=>prev-1)
        }
       
    }
    

    return (

        <div className={styles.reviewButtons}>  
            <button className={styles.prev_next}  onClick={handlechange} value="Prev" disabled={questionNum === 0 ?  true  : false}><img src={prev} alt="Previous" /></button>
<button onClick={handleHome} className={styles.home}>Home Page</button>           
             <button className={styles.prev_next} onClick={handlechange} value= "Next" disabled={questionNum + 1 === quizAnswersPicked.length ?  true : false}><img src={next} alt="Next" /></button> 

            

</div>         
 )
}

export default Buttons