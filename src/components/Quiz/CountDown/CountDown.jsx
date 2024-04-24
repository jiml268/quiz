import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector,  } from 'react-redux'

import { getAskQuestions,  } from "../../../redux/quiz/quizSelectors";

import styles from './CountDown.module.css'

function CountDown() {
     const navigate = useNavigate();
    const questionCnt = useSelector(getAskQuestions)
    const [num, setNum] = useState(questionCnt*30);
 const [timer, setTimer] = useState("00:00:00");
  
  let intervalRef = useRef();
  
    

    useEffect(() => {
      
const decreaseNum = () => {
        const total = num - 1
    if (total >= 0) {
        setNum((prev) => prev - 1);
        const seconds = Math.floor((total) % 60);
        const minutes = Math.floor(
            (total / 60) % 60
        );
        const hours = Math.floor(
            (total / 60 / 60) % 24
        );
        setTimer(
            (hours > 9 ? hours : "0" + hours) +
            ":" +
            (minutes > 9
                ? minutes
                : "0" + minutes) +
            ":" +
            (seconds > 9 ? seconds : "0" + seconds)
        );
        console.log('decreaseNum ran')
    } else {
        clearInterval(intervalRef.current);
         navigate("/end")
    }
    }

    intervalRef.current = setInterval(decreaseNum, 1000);

    return () => clearInterval(intervalRef.current);
  }, [num, navigate]);
  
 
  
  return (
     <div
            style={{ textAlign: "center" }}>
           
            <h3>Remaining Time</h3>
            <p className={styles.counterBox}>{timer}</p>
            
        </div>
  );
};

export default CountDown