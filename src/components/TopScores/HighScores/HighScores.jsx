import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getScores } from '../../../redux/scores/scoresOperators'
import { getCategoryPicked } from '../../../redux/quiz/quizSelectors'
import styles from './HighScores.module.css'
import { getUserName } from '../../../redux/user/userSelectors'
function HighScores() {
    const dispatch = useDispatch()
    const [showCat, setShowCat] = useState('All')
    const [showUser, setShowUser] = useState('All')
    const [scoresReceived, setScoresReceived] = useState([])
    const [scoresToShow, setScoresToShow] = useState([])
    const CategoryPicked = useSelector(getCategoryPicked)
    const currentUser = useSelector(getUserName)


    const catClicked = (e) => {
        console.log(e.target.value)
        setShowCat(e.target.value);
        if (e.target.value === "All") {
            if (showUser === "All") {
                setScoresToShow(scoresReceived.slice(0, 10))
            } else {
                const filtered = scoresReceived.filter(user => {
                    return user.username === currentUser
                })
                setScoresToShow(filtered.slice(0, 10))
            }
        } else {

            if (showUser === "All") {
                console.log( scoresReceived )
                console.log(CategoryPicked.name)



                const filtered = scoresReceived.filter(user => {
                    return user.category === CategoryPicked.name
                })
                setScoresToShow(filtered.slice(0, 10))
            } else {
                const filtered = scoresReceived.filter(user => {
                    return user.username === currentUser  && user.category === CategoryPicked.name
                })
                setScoresToShow(filtered.slice(0, 10))
            }
        }
        }
    
    const userClicked = (e) => {
        setShowUser(e.target.value);
        if (e.target.value === "All") {
            if (showCat === "All") {
                setScoresToShow(scoresReceived.slice(0, 10))
            } else {
                const filtered = scoresReceived.filter(user => {
                    return user.category === CategoryPicked.name
                })
                setScoresToShow(filtered.slice(0, 10))
            }
        } else {

            if (showCat === "All") {

                const filtered = scoresReceived.filter(user => {
                    return user.username === currentUser
                })
                setScoresToShow(filtered.slice(0, 10))
            } else {
                const filtered = scoresReceived.filter(user => {
                    return user.username === currentUser  && user.category === CategoryPicked.name
                })
                setScoresToShow(filtered.slice(0, 10))
            }
        }
 
        }
    
    
     useEffect(() => {
           

        const fetchHigh = async () => {
            const allScores = await dispatch(getScores());
            setScoresReceived(allScores.payload)
            setScoresToShow(allScores.payload.slice(0, 10))
         }
         
        fetchHigh() 
    
    }, [dispatch, ])

    return (
        
        <>  
            <div className={styles.buttonDiv}>
                {/* <h3>Categoty</h3> */}
                <button onClick={catClicked} value="All" className={`${styles.button} ${showCat==="All" && styles.active}`}> All Categories</button>
                <button onClick={catClicked} value="Current" className={`${styles.button} ${showCat!=="All" && styles.active}`}> Current Category</button>
                {/* <h3>User</h3> */}
                <button onClick={userClicked} value="All" className={`${styles.button} ${showUser==="All" && styles.active}`}> All User</button>
                <button onClick={userClicked} value="Current" className={`${styles.button} ${showUser!=="All" && styles.active}`}> Current User</button>

            </div>  
            <div>
            <h2 className={styles.userHeader}> Top {scoresToShow.length<10?scoresToShow.length:10} Scores:  </h2>
            <h2 className={styles.userHeader}> High Scores for user:  {showUser === "All" ? "All Users" : currentUser } </h2>
            </div>
 <div>
                <h2 className={styles.categoryHeader}> Category: {showCat === "All" ? "All Categories" : CategoryPicked.name } </h2>
            </div>

            {scoresToShow.length > 0 ?
                <table>
        <thead>
          <tr>
            <th style={{display: showUser !== "All" && 'none' }} className={styles.cellFormat}>User </th>
            <th style={{display: showCat !== "All" && 'none' }} className={styles.cellFormat}>Category</th>
                            <th  className={styles.cellFormat}># of <br /> Question</th>
                            <th  className={styles.cellFormat}>Correct</th>
                            <th  className={styles.cellFormat}>Score</th>
          </tr>
        </thead>
                    <tbody>
{}

                        {scoresToShow.map((item, index) => (
                                    <tr key={`${index}-tableRow`}>
                                        <td className={styles.cellFormat} style={{ display: showUser !== "All" && 'none' }}>
                                            {item.username}
                                        </td>
                                        <td className={styles.cellFormat} style={{ display: showCat !== "All" && 'none' }}>
                                            {item.category}
                                        </td>
                                        <td className={styles.cellFormat}>
                                            {item.numOfQuestions}
                                        </td>
                                        <td className={styles.cellFormat}>
                                            {item.numCorrect}
                                        </td>
                                        <td className={styles.cellFormat}>
                                            {item.score}%
                                        </td>
                                 
                                    </tr>
                                )
                           )}
                    </tbody>
                    </table> : <h3>No scores to display</h3>       
            }
</>         
 )
}

export default HighScores