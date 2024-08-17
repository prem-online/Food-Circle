import React, { useState } from 'react';
import { Box, Button, Stack, TextField, Typography, Snackbar, Alert } from '@mui/material';
import validator from 'validator';
import axios from 'axios';
import { BASE_URL, MODULE_SUCCESSFULL_CREATED } from '../../constants';
import Navbar from '../Main/Navbar';
function Signup() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState('');
  const [passwordHelperText, setPasswordHelperText] = useState('');
  const [confirmPasswordHelperText, setConfirmPasswordHelperText] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('success');
  
  const validateEmail = (email) => {
    if (!validator.isEmail(email)) {
      setEmailHelperText('Please enter a valid email');
      setEmailError(true);
    } else {
      setEmailHelperText('');
      setEmailError(false);
    }
  };

  const validatePassword = (password) => {
    if (!validator.isStrongPassword(password)) {
      setPasswordHelperText('A strong password needs 8+ characters, one lowercase, one uppercase, one number, and one symbol.');
      setPasswordError(true);
    } else {
      setPasswordHelperText('');
      setPasswordError(false);
    }
  };

  const validateConfirmPassword = (confirmPassword) => {
    if (confirmPassword !== password) {
      setConfirmPasswordHelperText('Password does not match confirm password.');
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordHelperText('');
      setConfirmPasswordError(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateEmail(email);
    validatePassword(password);
    validateConfirmPassword(confirmPassword);
    if (!emailError && !passwordError && !confirmPasswordError) {
      createAccount(email, password, confirmPassword);
    }
  };

  const handleClose = () => {
    setOpen(false);
    window.location.href = '/dashboard';
  };

  const createAccount = async (email, password, confirmPassword) => {
    const url = 'api/v1/accounts/';
    const data = {
      account: {
        email: email,
        password: password,
        confirm_password: confirmPassword
      }
    };
    // Assuming PostRequest returns a promise, handle response accordingly
    try {
            const response = await axios.post(`${BASE_URL}${url}`, data);
            setResponseMessage(`Account ${MODULE_SUCCESSFULL_CREATED}`);
            setOpen(true);
            setSeverity('success');
            
      } catch (error) {
            console.log(error)
            setResponseMessage(
              error.response?.data?.[0] || 
              error.response?.data?.errors?.[0] || 
              "An unexpected error occurred."
            );
            setOpen(true);
            setSeverity('error');
      }
  };

  return (
    <>
    <Navbar></Navbar>
      <Box
        component="form"
        sx={{
          mx: 'auto',
          height: 'auto',
          width: '40vh',
          mt: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& .MuiTextField-root': {
            m: 1,
            width: '35ch',
          }
        }}
        onSubmit={handleSubmit}
      >
    
        <Stack spacing={2}>
          <Snackbar 
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              open={open}
              autoHideDuration={1000}
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
          
          <TextField
            id="email-auth"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            helperText={emailHelperText}
            required
          />
          <TextField
            id="password-auth"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
            helperText={passwordHelperText || 'A password needs 8+ characters, one lowercase, one uppercase, one number, and one symbol.'}
            required
          />
          <TextField
            id="password-confirmation-auth"
            label="Password Confirmation"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={confirmPasswordError}
            helperText={confirmPasswordHelperText}
            required
          />
          <Typography>
            Already have an account? <Button href='/login'>Login</Button>
          </Typography>
          <Button type="submit" variant='contained'>Signup</Button>
        </Stack>
      </Box>
    </>
  );
}

export default Signup;
