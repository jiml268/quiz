import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

import { getAskQuestions, getQuizComplete } from "../../../redux/quiz/quizSelectors";
import { setQuizComplete, }  from '../../../redux/quiz/quizSlice'

import styles from './CountDown.module.css'

function CountDown() {
    const dispatch = useDispatch()
  const Ref = useRef(null);
    const navigate = useNavigate();
    const questionCnt = useSelector(getAskQuestions)
    const isQuizzComplete = useSelector(getQuizComplete)

    const totalTime = questionCnt*30

  const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = (e) => {
        const total =
            Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor(
            (total / 1000 / 60) % 60
        );
        const hours = Math.floor(
            (total / 1000 / 60 / 60) % 24
        );
        return {
            total,
            hours,
            minutes,
            seconds,
        };
  };
  
    
 
   
    useEffect(() => {
        const startTimer = (e) => {
        let { total, hours, minutes, seconds } =
            getTimeRemaining(e);
        if (!isQuizzComplete) {
            if (total >= 0) {
                // update the timer
                // check if less than 10 then we need to
                // add '0' at the beginning of the variable
                setTimer(
                    (hours > 9 ? hours : "0" + hours) +
                    ":" +
                    (minutes > 9
                        ? minutes
                        : "0" + minutes) +
                    ":" +
                    (seconds > 9 ? seconds : "0" + seconds)
                );
            } else {
                dispatch(setQuizComplete(true))
clearInterval(Ref.current);
                    navigate("/end")
            
            }
        };
    }
 const clearTimer = (e) => {
    
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next
        setTimer(`00:00:${totalTime}`);
 
        // If you try to remove this line the
        // updating of timer Variable will be
     // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };
 
    const getDeadTime = () => {
        let deadline = new Date();
 
        // This is where you need to adjust if
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + totalTime);
        return deadline;
  };

        if (!isQuizzComplete) {

            clearTimer(getDeadTime());
        }
    }, [ isQuizzComplete, navigate, totalTime, dispatch]);
  
   return (
        <div
            style={{ textAlign: "center" }}>
           
            <h3>Remaining Time</h3>
            <p className={styles.counterBox}>{timer}</p>
            
        </div>
    );
  
  

};

export default CountDown