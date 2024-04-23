import { getCategoryPicked } from "../../../redux/quiz/quizSelectors"
import { useSelector } from "react-redux"

function Header({questionNum}){
    const currentCategory = useSelector(getCategoryPicked)
   

   

    return (
        <>  
            <h1> Category: {currentCategory.name}</h1>
            <h2> Question # {questionNum + 1}</h2>

</>         
 )
}

export default Header