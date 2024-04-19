import styles from './Heading.module.css'
import {  getDifficultPicked } from '../../../redux/quiz/quizSelectors'
import { useSelector } from 'react-redux'


function Heading() {
    const showDiffivultPicked = useSelector(getDifficultPicked)

   

 return (
     <>
         <h1 className={styles.title}>Mind Bending Quizes</h1>
         <h2 className={styles.title}>Quiz Results</h2>

         <h3>Category:  </h3>
          <h3>Difficulty Level: {showDiffivultPicked}  </h3>

</>         
 )
}

export default Heading