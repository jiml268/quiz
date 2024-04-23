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

           const getDeadTime = () => {
        let deadline = new Date();
 
       
        deadline.setSeconds(deadline.getSeconds() + totalTime);
        return deadline;
    };
       

         const startTimer = (e) => {
        let { total, hours, minutes, seconds } =
            getTimeRemaining(e);
        if (total >= 0) {
            if (!isQuizzComplete) {
              
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
                if (Ref.current) clearInterval(Ref.current); 
            }    
        }else {
                dispatch(setQuizComplete(true))
                if (Ref.current) clearInterval(Ref.current);
                    navigate("/end")
            
            }
    };
 
        
        const clearTimer = (e) => {
      
        setTimer(`00:00:${totalTime}`);;
 
       
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
        };
        
         if (!isQuizzComplete) {
            clearTimer(getDeadTime());
        }
    }, [isQuizzComplete,  dispatch, totalTime,navigate, ]);
 
  
   return (
        <div
            style={{ textAlign: "center" }}>
           
            <h3>Remaining Time</h3>
            <p className={styles.counterBox}>{timer}</p>
            
        </div>
    );
  
  

};

export default CountDown