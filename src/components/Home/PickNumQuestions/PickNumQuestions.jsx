import { useDispatch, useSelector, } from 'react-redux'
import { useEffect, useState } from 'react';
import { getCategoryPicked, getDifficultPicked, getAvailableQuestion } from '../../../redux/quiz/quizSelectors'
import { getCatCount } from '../../../redux/quiz/quizOperators';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';


function PickNumQuestions() {
  

    const dispatch = useDispatch()
    const showCatsPicked = useSelector(getCategoryPicked)
    const showDiffivultPicked = useSelector(getDifficultPicked)
    const showCatCount = useSelector(getAvailableQuestion)
    const [quizQuestion, setQuizQuestions] = useState(0)
 
    const handleChange = (event, newValue) => {
        setQuizQuestions(newValue);
    };


    useEffect(() => {
        const fetchCount = async () => {
            await dispatch(getCatCount({ cat_id: showCatsPicked, difficulty: showDiffivultPicked }));
        }
        fetchCount()
            // make sure to catch any error
            .catch(console.error);
    }, [dispatch, showCatsPicked, showDiffivultPicked])
   



    //     const [catPicked, setCatPicked] = useState('');

    //   const handleChange = (e) => {
    //       setCatPicked(e.target.value);
    //     console.log(e.target.value)
    //     dispatch(setCategory(e.target.value))
    
    //   };

    return (
       
        <Box sx={{ width: 200 }}>
             <Typography id="input-slider" gutterBottom>
        No of Quiz Questions to be asked
      </Typography>
      { showCatCount > 0 &&
            <Slider aria-label="Volume" min={1}
                max={showCatCount} onChange={handleChange}
                step={1}
                value={quizQuestion}
                    valueLabelDisplay="auto" />
            }
            
        </Box>
    
 )
}

export default PickNumQuestions