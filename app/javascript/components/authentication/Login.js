import React, {useState} from 'react'
import { Box,Button,Stack, Typography, Snackbar, Alert } from '@mui/material'
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { BASE_URL, LOGGED_IN_SUCCESSFULLY } from '../../constants';

const Login = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [open, setOpen] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [severity, setSeverity] = useState('success');
    const handleClose = () => {
        setOpen(false);
      };

    const sendLoginRequest = async (email, password) => {
        const url = "/api/v1/logins";
        const data = {
              email: email,
              password: password,
        };
        try {
            const response = await axios.post(`${BASE_URL}${url}`, data);
            setResponseMessage(`${LOGGED_IN_SUCCESSFULLY}`);
            setOpen(true);
            setSeverity('success');
            localStorage.setItem('login_info', JSON.stringify(response.data.meta.login_info))
            window.location.href = '/dashboard';
      } catch (err) {
        console.log(err);
            setResponseMessage(err.response.data[0]);
            setOpen(true);
            setError(true);
            setSeverity('error');
      }

    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        sendLoginRequest(email, password)
    }

  return (
    <Box
    component="form"
    sx={{ 
        mx: 'auto',
        height: '20vh',
        width: '40vh',
        mt:10,
        display: 'flex',
        '& .MuiTextField-root': { m: 1,
        } 
     }}
    onSubmit={handleSubmit}
    >
        <Stack direction='row' 
            sx={{mx: 'auto',mt:'10%', height: '100%'}}
        >
            <Snackbar 
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                autoHideDuration={3000}
                key={'top' + 'center'}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity={severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {responseMessage}
                </Alert>
            </Snackbar>
        
            <Stack direction='column'>
                <Stack>
                    <TextField
                        id="email-auth"
                        label="Email"
                        defaultValue=""
                        required
                        onChange={(e)=> setEmail(e.target.value)}
                        />

                    <TextField
                        id="password-auth"
                        label="Password"
                        type="password"
                        error={error}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                
                </Stack>
                <Stack>
                    <Typography>
                        Create an account?
                        <Button href='/signup'>Signup</Button>
                    </Typography>
                </Stack>
                <Stack>
                    <Button type="submit" variant='contained'>Login</Button>
                </Stack>
            </Stack>
        </Stack>
    </Box>
  )
}

export default Login;
