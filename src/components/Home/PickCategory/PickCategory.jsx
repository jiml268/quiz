import { useDispatch, useSelector, } from 'react-redux'
import { useState } from 'react';
import { getquizCategories } from '../../../redux/quiz/quizSelectors'
import { setCategory } from '../../../redux/quiz/quizSlice';
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
    
    dispatch(setCategory(e.target.value))
    
  };

 return (
     <>
       

         <Box sx={{ minWidth: "300px", margin:  "10px 0" }}>
      <FormControl size = "small" style={{minWidth: 300}} >
        <InputLabel id="demo-simple-select-label" sx={{ color: "#fff" }}>Calegories</InputLabel>
         <Select

           sx={{
             maxHeight: 250,
             overflow: 'auto', // to enable scrolling
             color: '#fff'
           }}

          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={catPicked}
          label="Catogories"
          onChange={handleChange}
                 >
                     
           {showCats.length > 0 && showCats.map((cat, index) => {
   const catName = cat.name.split("Entertainment: ").pop()
        return (
          <MenuItem key= {index} value={cat} >{catName}</MenuItem>
        );
      })}
        </Select>
      </FormControl>
    </Box>

     </>
 )
}

export default PickCategory