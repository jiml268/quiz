import { useDispatch, useSelector, } from 'react-redux'
import { useState } from 'react';
import { getquizCategories } from '../../../redux/quiz/quizSelectors'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function PickCategory() {

 const dispatch = useDispatch()
    const showCats = useSelector(getquizCategories)
   

    const [catPicked, setCatPicked] = useState('');

  const handleChange = (e) => {
      setCatPicked(e.target.value);
      console.log(e.target.value)
  };

 return (
     <>
       

         <Box sx={{ minWidth: 120 }}>
      <FormControl size = "small" >
        <InputLabel id="demo-simple-select-label">Calegories</InputLabel>
         <Select

           sx={{
             maxHeight: 250,
             overflow: 'auto', // to enable scrolling
           }}

          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={catPicked}
          label="Catogories"
          onChange={handleChange}
                 >
                     
 {showCats.length > 0 && showCats.map((cat, index) => {
        return (
          <MenuItem key= {index} value={cat.id}>{cat.name}</MenuItem>
        );
      })}
        </Select>
      </FormControl>
    </Box>

     </>
 )
}

export default PickCategory