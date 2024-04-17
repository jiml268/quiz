import { getQuizQuestion } from "../../../redux/quiz/quizSelectors"
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react"
import {getCorrectAnswers, getIncorrectAnswers} from '../../../redux/quiz/quizSelectors'
import { setCorrectAnswers, setIncorrectAnswers }  from '../../../redux/quiz/quizSlice'
import './Questions..css'

function Questions() {
    const dispatch = useDispatch()
    const QuestionsToAsk = useSelector(getQuizQuestion)
    console.log('QuestionsToAsk', QuestionsToAsk)
    const currentCorrect = useSelector(getCorrectAnswers)
    const currentWrong = useSelector(getIncorrectAnswers)

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selected, setSelected] = useState(false)
       const [correct, setCorrect] = useState()

    const handleClick = (event, newValue) => {
        setSelected(false)
        setCurrentQuestion(prev => prev + 1)
    };

    const handleAnswer =  e => {
        setSelected(true)
        setCorrect(e.currentTarget.value)
        console.log('e.currentTarget.value', e.currentTarget.value)
         console.log(' QuestionsToAsk[currentQuestion].correct_answer',  QuestionsToAsk[currentQuestion].correct_answer)
        if (e.currentTarget.value === QuestionsToAsk[currentQuestion].correct_answer) {
            dispatch(setCorrectAnswers(currentCorrect + 1))
        } else {
            dispatch(setIncorrectAnswers(currentWrong + 1))

        }
    } 

const handleSelect = (answer) => {
    if (correct === answer && correct === QuestionsToAsk[currentQuestion].correct_answer) return "select";
    else if (correct === answer && correct !== QuestionsToAsk[currentQuestion].correct_answer) return "wrong";
    else if (answer === QuestionsToAsk[currentQuestion].correct_answer) return "select";
  };

    return (
         QuestionsToAsk.length > 0 &&
                <>
            
               
                    <h3>Questions</h3>
                    <h3>{currentQuestion + 1}</h3>
            <button onClick={handleClick} disabled={!selected}> click</button>
                   
                
                    <div>
                        <h3>{QuestionsToAsk[currentQuestion].question}</h3>

                        {QuestionsToAsk[currentQuestion].answers.map((answer, index) => {
                            return (
                                <button
                                    className={`button  ${selected && handleSelect(answer)}`}
                                    key={index}
                                value={answer}
                                onClick={handleAnswer}
                                    disabled={selected}
                                >
                                    {answer}
                                </button>
                            )
                        })};
                    </div>
            
                </>
        
    )
}



export default Questions