import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import {getCorrectAnswers, getIncorrectAnswers, getQuizQuestion, getAskQuestions} from '../../../redux/quiz/quizSelectors'
import { setCorrectAnswers, setIncorrectAnswers }  from '../../../redux/quiz/quizSlice'
import './Questions..css'

function Questions() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const QuestionsToAsk = useSelector(getQuizQuestion)
    const numberOfQuestionsToAsk = useSelector(getAskQuestions)

    console.log('QuestionsToAsk', QuestionsToAsk)
    const currentCorrect = useSelector(getCorrectAnswers)
    const currentWrong = useSelector(getIncorrectAnswers)


    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selected, setSelected] = useState(false)
       const [correct, setCorrect] = useState()

    const handleClick = (event, newValue) => {
        setSelected(false)
        if (currentQuestion < numberOfQuestionsToAsk - 1) {
            setCurrentQuestion(prev => prev + 1)
        } else {
           navigate("/end") 
        }
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
            <button className="nextQuestion" onClick={handleClick} disabled={!selected}> {currentQuestion < numberOfQuestionsToAsk-1 ? 'next question' : 'finish'}</button>
                </>
        
    )
}



export default Questions