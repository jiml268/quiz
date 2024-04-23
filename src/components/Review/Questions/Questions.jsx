import { getQuizQuestion, getAnswersPicked } from "../../../redux/quiz/quizSelectors"
import { useSelector } from "react-redux"
import styles from './Questions.module.css'

function Questions({questionNum}){
    const quizQuestions = useSelector(getQuizQuestion)
    const quizAnswersPicked = useSelector(getAnswersPicked)
 
   

    const SetClass = (answer) => {
    if (answer === quizQuestions[questionNum].correct_answer && quizAnswersPicked[questionNum].answer === answer
  ) return "select";   

      if (answer !== quizQuestions[questionNum].correct_answer && quizAnswersPicked[questionNum].answer === answer
  ) return "wrong";   
if (answer === quizQuestions[questionNum].correct_answer 
  ) return "select";  
    }

    return (
        <>  
            <h3>{quizQuestions[questionNum].question}</h3>
             {quizQuestions[questionNum].answers.map((answer, index) => {
                            return (
                                <div 
                                    key={index}
                                    className={` ${styles.review} ${SetClass(answer)}`}
                                >
                                    {answer}
                                </div>
                            )
                        })}

</>         
 )
}

export default Questions