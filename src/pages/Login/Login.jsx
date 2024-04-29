import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useState } from 'react';

const Login=()=>{
    const [account, setAccount] = useState({ userOrEmail: "", password: "" });
    
    const handleChange = e => {
        const { name, value } = e.target;
        setAccount({ ...account, [name]: value });
    }


    const handelLogin = (e)=>{
      e.preventDefault();
  };
   
    return(
        <Grid>
            <Paper >
                <Grid align='center'>
                     <Avatar ><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username or Email' placeholder='Enter username or Email' fullWidth required  value={account.userOrEmail}
              onChange={handleChange} name="userOrEmail"/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required value={account.password}
              onChange={handleChange} name="password"/>
               
                <Button type='submit' color='primary' variant="contained"  fullWidth onClick = {handelLogin}>Sign in</Button>
                {/* <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography> */}
                <Typography > Not a member yet?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login