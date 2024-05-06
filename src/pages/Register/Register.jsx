import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Joi from "joi-browser";
 import {  toast } from 'react-toastify';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userRegister } from '../../redux/user/userOperators';
import { useNavigate } from "react-router-dom";


const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [account, setAccount] = useState({ user: "", password: "", email: "" });
  const schema = {
    user: Joi.string().min(4).max(20).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(20).required(),
  };
    
  const handleChange = e => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  }
  
  const handleClick = () => {
    navigate('/login')
  }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = Joi.validate(account, schema, {
            abortEarly: false,
        });
        const { error } = result;
      if (!error) {
           const { user, password, email } = account;
            const createdUser = { username: user, password: password, email: email }
            const result = await dispatch(userRegister(createdUser))
       
        if (result.payload.data.code === 201) {
          setAccount({ user: "", password: "", email: "" })
          toast.success("Account Created", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",

          });
              navigate(-1)

        }
        if (result.payload.data.code === 200) {
          toast.warning(result.payload.data.data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",

          });
        }
           
            return;
        } else {
            let ErrorMessage = "Please Correct the following issues"
            let userError = ""
            let emailError = ""
            let passwordError=""
            let prevError = ""
            error.details.map((item) => {
                if (item.path[0] !== prevError){
                    prevError = item.path[0]
                    item.path[0] === "user" ?userError = "  User must be between 4 and 20 in lenght." :
                        item.path[0] === "email" ? emailError = "Email must be a valid email." :
                        passwordError = "Password must be between 8 and 20 in lenght."
                }
                return item
            })
          
            const combinedError = `${ErrorMessage}
            ${userError !== "" ? userError:""}
            ${emailError !== "" ? emailError:""}
            ${passwordError !== "" ? passwordError:""}
            `
           toast.error(combinedError, {
                position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",

            });
          }
    }
   
    return (
    
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="user"
                  required
                  fullWidth
                  id="user"
                  label="User"              
                autoFocus
                  value={account.user}
                  onChange={handleChange}
                  helperText="Must be between 4 & 20 in length."
                  autoComplete="User"            
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                autoComplete="email"
                                value={account.email}
                                                                onChange={handleChange}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                                autoComplete="new-password"
                                value={account.password}
                                onChange={handleChange}
                                                                 helperText="Must be between 8 & 20 in length."


                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                 <Button
              type="button"
              fullWidth
              variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleClick}
            >
             Already have an account? Sign in
            </Button>
               
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>  
    )
}

export default Register