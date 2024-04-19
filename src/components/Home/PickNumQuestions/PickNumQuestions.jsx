import { useDispatch, useSelector, } from 'react-redux'
import { useEffect, useState } from 'react';
import { getCategoryPicked, getDifficultPicked, getAvailableQuestion } from '../../../redux/quiz/quizSelectors'
import { getCatCount } from '../../../redux/quiz/quizOperators';
import { setAskQuestions } from '../../../redux/quiz/quizSlice';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import MuiInput from '@mui/material/Input';
import { styled } from '@mui/material/styles';


const Input = styled(MuiInput)`
  width: 42px;
`;
function PickNumQuestions() {
  

    const dispatch = useDispatch()
  const showCatsPicked = useSelector(getCategoryPicked)
  const showDiffivultPicked = useSelector(getDifficultPicked)

    const showCatCount = useSelector(getAvailableQuestion)
    const [quizQuestion, setQuizQuestions] = useState(1)
 
    const handleChange = (event, newValue) => {
        setQuizQuestions(newValue);
        dispatch(setAskQuestions(newValue))

    };

     const handleInputChange = (event) => {
         setQuizQuestions(event.target.value === '' ? 1 :  Number(event.target.value));
         dispatch(setAskQuestions(event.target.value === '' ? 1 :  Number(event.target.value)))
  };

  const handleBlur = () => {
    if (quizQuestion < 1) {
      setQuizQuestions(1);
    } else if (setQuizQuestions > showCatCount) {
      setQuizQuestions(showCatCount);
    }
  };


  useEffect(() => {
           

        const fetchCount = async () => {
          await dispatch(getCatCount({ cat_id: showCatsPicked.id, difficulty: showDiffivultPicked }));
          

    }
    if (showCatsPicked.id  && showDiffivultPicked !== "") {
      fetchCount()
    
        // make sure to catch any error
        .catch(console.error);
    }
    }, [dispatch, showCatsPicked, showDiffivultPicked])
   
    useEffect(() => {
     
        if (quizQuestion > showCatCount && showCatCount !== 0 ) {
            setQuizQuestions(showCatCount) 
        }
            
           
       
    }, [quizQuestion , showCatCount])



    return (
       
        <Box sx={{ width: 225, margin: "10px auto" , display: 'flex', flexDirection: 'column' }}>
             <Typography id="input-slider" gutterBottom sx={{ color: '#fff' }}>
        No of Questions to be asked
      </Typography>
            {showCatCount > 0 &&
                <div>
            <Slider aria-label="Always visible"
              sx={{ color: "#fff" }}
                    min={1}
                        max={showCatCount}
                        onChange={handleChange}
                step={1}
                value={quizQuestion}
                    valueLabelDisplay="auto" />
            <Input
              sx={{ color: "#fff" }}
            value={quizQuestion}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
              inputProps={{
              
              step: 1,
              min: 1,
              max: showCatCount,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
                    />
                    </div>
            }
            
        </Box>
    
 )
}

export default PickNumQuestions