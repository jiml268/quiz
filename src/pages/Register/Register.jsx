import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useState } from 'react';

const Register=()=>{
    const [account, setAccount] = useState({ user: "", password: "", email: "" });
    
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
                <TextField label='Username' placeholder='Enter Username' fullWidth required  value={account.user}
                    onChange={handleChange} name="userOrEmail" />
                <TextField label='email' placeholder='Enter Email' fullWidth required  value={account.email}
              onChange={handleChange} name="email"/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required value={account.password}
              onChange={handleChange} name="password"/>
               
                <Button type='submit' color='primary' variant="contained"  fullWidth onClick = {handelLogin}>Sign in</Button>
                {/* <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography> */}
                <Typography > Already have an account?
                     <Link href="#" >
                        Sign In
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Register