import { useDispatch,  } from 'react-redux'
import { useState } from 'react';
import { setDifficult } from '../../../redux/quiz/quizSlice';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function PickDifficuly() {

    const dispatch = useDispatch()
    
const skills = ['Any', 'Easy', 'Medium', 'Hard']
    const [skillPicked, setSkillPicked] = useState('');

  const handleChange = (e) => {
      setSkillPicked(e.target.value);
      
      dispatch(setDifficult(e.target.value))
  };

 return (
     <>
       

         <Box sx={{ minWidth: 120 }}>
      <FormControl size = "small"   style={{minWidth: 300}} >
        <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
         <Select

           sx={{
             maxHeight: 250,
             overflow: 'auto', // to enable scrolling
           }}

          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={skillPicked}
          label="Difficulty"
          onChange={handleChange}
                 >
                     
 {skills.length > 0 && skills.map((skill, index) => {
        return (
          <MenuItem key= {index} value={skill}>{skill}</MenuItem>
        );
      })}
        </Select>
      </FormControl>
    </Box>

     </>
 )
}

export default PickDifficuly