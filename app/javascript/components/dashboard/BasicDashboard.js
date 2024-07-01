import React from "react";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Stack, ButtonGroup, Button , IconButton} from "@mui/material";
const BasicDashboard = () => {
  return (
    <Stack direction="row">
      <Stack direction="row">
        <IconButton aria-label="logo" href="/">
          <RestaurantIcon />
        </IconButton>
      </Stack>

      <Stack
        direction="row"
        spacing={4}
        alignItems="stretch"
        ml={4}
        mr={2}
        sx={{ mx: "auto", pb: 1, pt: 1 }}
      >
        <ButtonGroup>
          <Button variant="primary" href="/order/list">
            Orders
          </Button>
          <Button variant="primary" href="/about">
            Menu
          </Button>
          <Button variant="primary" href="/contact">
            Invoices
          </Button>
        </ButtonGroup>

        <Stack direction="row" spacing={2} sx={{ mx: "auto !important" }}>
          <Button variant="outlined" href="/signup">
            Settings
          </Button>
          <Button 
            variant="contained"
            href='/logout'
            onClick={()=> localStorage.removeItem('token')}
            >LogOut</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BasicDashboard;
