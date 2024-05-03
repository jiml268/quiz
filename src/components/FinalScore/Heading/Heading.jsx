import styles from './Heading.module.css'

import {  getDifficultPicked, getCategoryPicked } from '../../../redux/quiz/quizSelectors'
import { useSelector } from 'react-redux'


function Heading() {
    const showDiffivultPicked = useSelector(getDifficultPicked)
    const showCategoryPicked = useSelector(getCategoryPicked)

    const catName = showCategoryPicked.name.split("Entertainment: ").pop()

 return (
     <>
         <h1 className={styles.title}>Mind Bending Quizzes</h1>
         <h2 className={styles.title}>Quiz Results</h2>

         <h3 className={styles.category}>Category: {catName} </h3>
          <h3 className={styles.difficuly} >Difficulty Level: {showDiffivultPicked}  </h3>

</>         
 )
}

export default Heading