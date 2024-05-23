import React from 'react'
import { AppBar, IconButton, Toolbar, Typography, Stack, Button } from '@mui/material'
import RestaurantIcon from '@mui/icons-material/Restaurant';
const MuiNavbar = () => {
  return (
    <AppBar position='static'>
    <Toolbar>
        <IconButton size='large' edge='end' color='inherit' aria-label='logo'>
            <RestaurantIcon/>
        </IconButton>
        <Typography variant='h6' component='div' sx={{flexGrow:1}}>
            FOODCIRCLE
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button color='inherit'>Features</Button>
          <Button color='inherit'>Pricing</Button>
          <Button color='inherit'>About</Button>
          <Button color='inherit'>Login</Button>
        </Stack>
    </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar
