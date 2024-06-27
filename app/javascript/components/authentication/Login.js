import React from 'react'
import { Box,Button,Stack, Typography, Snackbar, Alert } from '@mui/material'
import TextField from '@mui/material/TextField';
import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { BASE_URL, LOGGED_IN_SUCCESSFULLY } from '../../constants';
const AuthContext = createContext();
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [open, setOpen] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [severity, setSeverity] = useState('success');
    const [token, setToken] = useState(undefined);
    const handleClose = () => {
        setOpen(false);
        localStorage.setItem('token', token)
        window.location.href = '/dashboard';
      };

    const navigate = useNavigate();
    const sendLoginRequest = async (email, password) => {
        const url = "/api/v1/logins";
        const data = {
              email: email,
              password: password,
        };

        try {
            const response = await axios.post(`${BASE_URL}${url}`, data);
            setResponseMessage(`${LOGGED_IN_SUCCESSFULLY}`);
            setIsLoggedIn(true);
            setOpen(true);
            setToken(response?.data.meta.token);

            setSeverity('success');
      } catch (error) {
            setResponseMessage(error.response.data[0]);
            setOpen(true);
            setSeverity('error');
      }

    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log('Submitted Success');
        // console.log(event.target.email.value);
        console.log(event.target);
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
