import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';
import Joi from "joi-browser";
import { toast } from 'react-toastify';
 import { useDispatch } from 'react-redux';
import { usersLogin } from '../../redux/user/userOperators';
import { useNavigate } from "react-router-dom";


const Login = () => {
      const dispatch = useDispatch()
 const navigate = useNavigate();
  const [account, setAccount] = useState({ userOrEmail: "", password: "" });
  
   const schema = {
        userOrEmail: Joi.string().min(4).max(20).required(),
        password: Joi.string().min(8).max(20).required(),
    };
    
    const handleChange = e => {
        const { name, value } = e.target;
        setAccount({ ...account, [name]: value });
    }

const handleClick = () => {
    navigate('/register')
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = Joi.validate(account, schema, {
      abortEarly: false,
    });
    const { error } = result;
    if (!error) {
      const { userOrEmail, password } = account;
      const loginUser = { userOrEmail: userOrEmail, password: password }
      const result = await dispatch(usersLogin(loginUser))
      console.log(result)
      const { error } = result
      console.log(error)
      if (!error) {
        if (result.payload.data.code === 200) {
          setAccount({ userOrEmail: "", password: "" })
          toast.success("Account Logged In.  Enjoy the quiz", {
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
        if (result.payload.data.code === 401) {
          toast.warning(`Incorrect pasword for user / email  ${userOrEmail}`, {
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
         if (result.payload.data.code === 404) {
          toast.warning(`No user was found with user or email  ${userOrEmail}`, {
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
      return
    };
    console.log("here is any other result", result)
    return
  }
   
    return(
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
            Log In
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  name="userOrEmail"
                  required
                  fullWidth
                  id="userOrEmail"
                  label="User or Email Address"
                  autoFocus
                  autoComplete="userOrEmail"
                                value={account.userOrEmail}
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

                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
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
             Don't have an account? Sign Up
            </Button>

              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>  
    )
}

export default Login