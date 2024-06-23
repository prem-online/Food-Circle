import React from 'react'
import { Box,Button, ButtonGrou,Stack, Typography,Stack} from '@mui/material'
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';

function Signup() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log('Submitted Success');
        // console.log(event.target.email.value);
        console.log(event.target);
        console.log(password, email,confirmPassword);
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
        <Stack direction='column'
            sx={{mx: 'auto',mt:'10%', height: '100%'}}
        >
            <Stack>

                    <TextField
                        id="email-auth"
                        label="Email"
                        defaultValue=""
                        onChange={(e) => setEmail(e.target.value)}
                        
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
                    <TextField
                        id="password-confirmation-auth"
                        label="Password Confirmation"
                        defaultValue=""
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Typography>
                        Already have an account?
                        <Button href='/login'>Login</Button>
                    </Typography>
            </Stack>
            <Stack>
                <Button type="submit" variant='contained'>Signup</Button>
            </Stack>
        </Stack>
    </Box>
  )
}

export default Signup
