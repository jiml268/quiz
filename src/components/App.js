import './App.css';
// import { getCategories, getCatCount, getQuestions } from '../redux/quiz/quizOperators';
// import { useDispatch,  } from 'react-redux';
// import {  useEffect } from 'react';
import  Home  from '../pages/Home/Home'
function App() {
  // const dispatch = useDispatch()
//  useEffect(() => {
        
       
//         const fetchCats = async () => {
//           // await dispatch(getCategories());
//           // const catpick = { cat_id: 9 }
//           // const noofquestions = await dispatch(getCatCount(catpick));
//           // console.log('noofquestions', noofquestions)
// const getQuest = {amount: 5, cat_id: 9, diff: 'easy'}
//        const showquest = await dispatch(getQuestions(getQuest));
//           console.log('showquest', showquest)   
            
//      }     
//        fetchCats()
//     // make sure to catch any error
//     .catch(console.error);
//     }, [dispatch,  ])
  return (
    <div className="App">
    < Home />
    </div>
  );
}

export default App;
