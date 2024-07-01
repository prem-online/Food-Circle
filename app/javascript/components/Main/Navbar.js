// Navbar.js
import React from "react";
import { Typography, Stack, ButtonGroup, Button, IconButton } from "@mui/material";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  return (
    <Stack direction='row'>

      <Stack direction='row'>
        <IconButton aria-label="logo" href="/">
          <RestaurantIcon />
        </IconButton>
      </Stack>

      <Stack direction='row' spacing={4}
        alignItems="stretch"
        ml={4}
        mr={2}
        sx={{mx: 'auto',pb: 1,pt:1}}
      >

        <ButtonGroup>
          <Button variant='primary' href="/">Home</Button>
          <Button variant='primary' href="/about">About</Button>
          <Button variant='primary' href="/contact">Contact</Button>
        </ButtonGroup>

        <Stack direction='row'
          spacing={2}
        sx={{mx:'auto !important'}}
        >
          <Button variant="outlined" href="/signup">SignUp</Button>
          <Button variant="contained">Learn More</Button>
        </Stack>
      </Stack>
    </Stack>
  )
};

export default Navbar;
