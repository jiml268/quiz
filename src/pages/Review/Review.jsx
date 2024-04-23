import { useState } from "react"
import Header from "../../components/Review/Header/Header"
import Questions from "../../components/Review/Questions/Questions"

import Buttons from "../../components/Review/Buttons/Buttons"

function Review() {
    const [questionNum, setQuestionNum] = useState(0)
    return (
        <>  
            <Header questionNum={questionNum} />
            < Questions questionNum={questionNum} />
            <Buttons questionNum={questionNum} setQuestionNum={setQuestionNum} />

</>         
 )
}

export default Review