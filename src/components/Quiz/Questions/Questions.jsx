import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react"
import { useNavigate } from "react-router-dom";

import {getCorrectAnswers, getIncorrectAnswers, getQuizQuestion, getAskQuestions,  } from '../../../redux/quiz/quizSelectors'
import { setCorrectAnswers, setIncorrectAnswers, setQuizComplete, setAnswersPicked  }  from '../../../redux/quiz/quizSlice'
import './Questions..css'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { resetState}
    from '../../../redux/quiz/quizSlice'

function Questions() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const QuestionsToAsk = useSelector(getQuizQuestion)
    const numberOfQuestionsToAsk = useSelector(getAskQuestions)
    const currentCorrect = useSelector(getCorrectAnswers)
    const currentWrong = useSelector(getIncorrectAnswers)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selected, setSelected] = useState(false)
    const [correct, setCorrect] = useState()
    const [open, setOpen] = useState(false);
    
    const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
      setOpen(false);
      if (e.currentTarget.value === "Agree") {
          dispatch(resetState())
           navigate("/")
      }
  };

    const handleClick = (event, newValue) => {
        setSelected(false)
        if (currentQuestion < numberOfQuestionsToAsk - 1) {
            setCurrentQuestion(prev => prev + 1)
        } else {
            dispatch(setQuizComplete(true))
           navigate("/end") 
        }
    };

    const handleAnswer = e => {
        setSelected(true)
        setCorrect(e.currentTarget.value)
        if (e.currentTarget.value === QuestionsToAsk[currentQuestion].correct_answer) {
            dispatch(setCorrectAnswers(currentCorrect + 1))
        } else {
            dispatch(setIncorrectAnswers(currentWrong + 1))

        }
        const currentAnswer = { question: currentQuestion, answer: e.currentTarget.value }
        dispatch(setAnswersPicked(currentAnswer))
        
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
                                    className={`${!selected && 'button'} ${selected && 'buttonNoHover'} ${selected && handleSelect(answer)} ${selected && "nopointer"}`}
                                    key={index}
                                value={answer}
                                onClick={handleAnswer}
                                    disabled={selected}
                                >
                                    {answer}
                                </button>
                            )
                        })}
                    </div>
           
         <button className="nextQuestion" onClick={handleClick} disabled={!selected}> {currentQuestion < numberOfQuestionsToAsk - 1 ? 'next question' : 'finish'}</button>
         <button className="nextQuestion" onClick={handleClickOpen} > Quit Quiz</button>
           <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Quit Current Quiz?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to quit the current Quiz
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} value= "Disagree" color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} value= "Agree" color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
         
        </>
        
    )
}



export default Questions