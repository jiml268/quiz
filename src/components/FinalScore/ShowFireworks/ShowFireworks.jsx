import { Fireworks, } from "@fireworks-js/react";
import { useState } from 'react';
import {  getCorrectAnswers, getAskQuestions } from '../../../redux/quiz/quizSelectors'
import { useSelector } from "react-redux";
import { useEffect } from "react";

function ShowFireworks() {
  const [isEnable, setEnable] = useState(false);
  const numcorrect = useSelector(getCorrectAnswers)
   const numAsked = useSelector(getAskQuestions)
   
  useEffect(() => {
    if (numcorrect === numAsked) setEnable(true)
  }, [numcorrect, numAsked])

const FireworksOptions = {
    speed: 3,
    mouse: {
      max: 1,
      move: false,
      click: true
    }
  };

  const style = {
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
      backgroundColor: "transparent",
      position: "absolute",
      zIndex: 9999
  };
    return (
      <>
        {console.log('isEnable', isEnable)}
                {console.log('numcorrect', numcorrect)}
        {console.log('numAsked', numAsked)}

            {isEnable && <Fireworks options={FireworksOptions} style={style} />}
        </>
        )
}

export default ShowFireworks