import { getQuizQuestion } from "../../../redux/quiz/quizSelectors"
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react"
import {getCorrectAnswers, getIncorrectAnswers} from '../../../redux/quiz/quizSelectors'
import { setCorrectAnswers, setIncorrectAnswers }  from '../../../redux/quiz/quizSlice'
import styles from './Questions.module.css'

function Questions() {
    const dispatch = useDispatch()
    const QuestionsToAsk = useSelector(getQuizQuestion)
    const currentCorrect = useSelector(getCorrectAnswers)
    const currentWrong = useSelector(getIncorrectAnswers)

    const [currentQuestion, setCurrentQuestion] = useState(0)
    let allAnswers = []
    console.log(QuestionsToAsk)

    const handleClick = (event, newValue) => {
        setCurrentQuestion(prev => prev + 1)
    };

    const handleAnswer = e => {
        console.log('e', e.currentTarget.value)
        if (e.currentTarget.value === 'Correct') {
            dispatch(setCorrectAnswers(currentCorrect + 1))
        } else {
            dispatch(setIncorrectAnswers(currentWrong + 1))

        }
    }

    const makeQuestion = () => {
        allAnswers = []
        if (QuestionsToAsk.length > 0) {
            if (QuestionsToAsk[currentQuestion].type === 'boolean') {
                if (QuestionsToAsk[currentQuestion].correct_answer === 'True') {
                    allAnswers.push({ answer: "True", stat: "Correct" })
                    allAnswers.push({ answer: "False", stat: "Wrong" })
                } else {
                    allAnswers.push({ answer: "True", stat: "Wrong" })
                    allAnswers.push({ answer: "False", stat: "Correct" })
                }
            } else {
              
                const numberOfAnswers = QuestionsToAsk[currentQuestion].incorrect_answers.length + 1
                const correctChoice = Math.floor(Math.random() * numberOfAnswers)
                console.log('correctChoice', correctChoice)
                for (let i = 0; i < numberOfAnswers; i++) {
                    if (i < correctChoice) {
                        allAnswers.push({ answer: QuestionsToAsk[currentQuestion].incorrect_answers[i], stat: "Wrong" })
                    }
                    if (i === correctChoice) {
                        allAnswers.push({ answer: QuestionsToAsk[currentQuestion].correct_answer, stat: "Correct" })
                    }
                    if (i > correctChoice) {
                        allAnswers.push({ answer: QuestionsToAsk[currentQuestion].incorrect_answers[i - 1], stat: "Wrong" })
                    }
                    
                   
                }
            }
        }
    }
    

    

    return (
        <>
           
            <h3>Questions</h3>
            <h3>{currentQuestion}</h3>
            {makeQuestion()}
            <button onClick={handleClick}> click</button>
            {allAnswers.length > 0 &&
                
                <div>
                    <h3>{QuestionsToAsk[currentQuestion].question}</h3>

                    {allAnswers.map((answer, index) => {
                        return (
                            <button
                                className={styles.button}
                                key={index}
                                value={answer.stat}
                                onClick={handleAnswer}
                            >
                                {answer.answer}
                            </button>
                        )
                    })};
                </div>
            }
        </>
            
    )
}



export default Questions