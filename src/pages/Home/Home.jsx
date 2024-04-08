import { getCategories, } from '../../redux/quiz/quizOperators';
import { useDispatch,  } from 'react-redux';
import { useEffect } from 'react';
import PickCategory from '../../components/Home/PickCategory/PickCategory'
import PickDifficuly from '../../components/Home/PickDifficuly/PickDifficuly';
import PickNumQuestions from '../../components/Home/PickNumQuestions/PickNumQuestions';
import StartQuiz from '../../components/Home/StartQuiz/StartQuiz';

function Home() {

 const dispatch = useDispatch()
 useEffect(() => { 
        const fetchCats = async () => {
          await dispatch(getCategories());       
     }     
       fetchCats()
    // make sure to catch any error
    .catch(console.error);
    }, [dispatch,  ])



 return (
     <>
       <PickCategory />
       <PickDifficuly />
     < PickNumQuestions />
     <StartQuiz />

     </>
 )
}

export default Home