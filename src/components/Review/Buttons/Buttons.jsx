import { useNavigate } from "react-router-dom";
import styles from './Buttons.module.css'
import { getAnswersPicked,  } from "../../../redux/quiz/quizSelectors"
import { useSelector } from "react-redux"


function Buttons({ questionNum, setQuestionNum }) {
 const navigate = useNavigate();
    const quizAnswersPicked = useSelector(getAnswersPicked)    
   const handleHome = () => {
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
            <button onClick={handlechange} value="Prev" disabled={questionNum === 0 ?  true  : false}>Prev</button>
<button onClick={handleHome} className={styles.home}>Home Page</button>           
             <button onClick={handlechange} value= "Next" disabled={questionNum + 1 === quizAnswersPicked.length ?  true : false}>next</button> 

            

</div>         
 )
}

export default Buttons