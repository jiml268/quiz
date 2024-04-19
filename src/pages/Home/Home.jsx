import { getCategories, } from '../../redux/quiz/quizOperators';
import { useDispatch,  } from 'react-redux';
import { useEffect } from 'react';
import PickCategory from '../../components/Home/PickCategory/PickCategory'
import PickDifficuly from '../../components/Home/PickDifficuly/PickDifficuly';
import PickNumQuestions from '../../components/Home/PickNumQuestions/PickNumQuestions';
import StartQuiz from '../../components/Home/StartQuiz/StartQuiz';
import Description from '../../components/Home/Description/Description';
import { getIsLoading } from '../../redux/quiz/quizSelectors';
import { useSelector } from 'react-redux';
import { Hourglass } from 'react-loader-spinner'
function Home() {
  
  const dispatch = useDispatch()
  const lodding = useSelector(getIsLoading)
 useEffect(() => { 
        const fetchCats = async () => {
          await dispatch(getCategories());       
     }     
       fetchCats()
    // make sure to catch any error
    .catch(console.error);
    }, [dispatch,  ])



 return (
   <div >
     {lodding && <Hourglass
       visible={true}
       height="80"
       width="80"
       ariaLabel="hourglass-loading"
       wrapperStyle={{}}
       wrapperClass=""
       colors={['#306cce', '#72a1ed']}
     />}
      <Description />
       <PickCategory />
       <PickDifficuly />
     < PickNumQuestions />
     <StartQuiz />

     </div>
 )
}

export default Home