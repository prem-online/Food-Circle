import React from 'react'
import { Box,Button, ButtonGrou,Stack, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';

const Login = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log('Submitted Success');
        // console.log(event.target.email.value);
        console.log(event.target);
        debugger

        if (!password) {
            setError(true);
          } else {
            setError(false);
            // Handle form submission
            console.log('Password:', password);
          }
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
            <Stack direction='column'>
                <Stack>
                    <TextField
                        id="email-auth"
                        label="Email"
                        defaultValue=""
                        required
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
