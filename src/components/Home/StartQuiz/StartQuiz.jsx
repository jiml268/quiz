import { useDispatch, useSelector, } from 'react-redux'
import { getCategoryPicked, getDifficultPicked, getAskQuestions } from '../../../redux/quiz/quizSelectors'
import { getQuestions } from '../../../redux/quiz/quizOperators';


function StartQuiz() {
 const dispatch = useDispatch()
    const showCatsPicked = useSelector(getCategoryPicked)
    const showDiffivultPicked = useSelector(getDifficultPicked)
    const showQuestionCount = useSelector(getAskQuestions)
    let setDiff = ""
    if (showDiffivultPicked === 'Any') {
        setDiff = ""
    } else {
        setDiff =showDiffivultPicked.toLowerCase()
    }


    const handleClick = (event) => {
        const questionParms = { amount: showQuestionCount, cat_id: showCatsPicked, diff: setDiff}

       dispatch(getQuestions(questionParms))
   
  };


     return (
         <>
          <button onClick={handleClick}>Start Quiz</button>
         </>
       
 )
}

export default StartQuiz