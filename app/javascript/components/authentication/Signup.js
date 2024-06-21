import React from 'react'
import { Box,Button, ButtonGrou,Stack } from '@mui/material'
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';

function Signup() {
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
        <div>

            <div>
                <TextField
                    id="email-auth"
                    label="Email"
                    defaultValue=""
                />

                <TextField
                    id="password-auth"
                    label="Password"
                    type="password"
                    error={error}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                
                <TextField
                    id="password-confirmation-auth"
                    label="Password Confirmation"
                    defaultValue=""
            />
            </div>

            <div>
                <Button type="submit" variant='contained'>Signup</Button>
            </div>
        </div>
    </Box>
  )
}

export default Signup
