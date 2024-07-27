import React from "react";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Stack, ButtonGroup, Button , IconButton} from "@mui/material";
const BasicDashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    // Perform additional logout operations if needed
    window.location.href = '/logout';
  }
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
          <Button variant="primary" href="/menu/list">
            Menu
          </Button>
          <Button variant="primary" href="/contact">
            Invoices
          </Button>
        </ButtonGroup>

        <Stack direction="row" spacing={2} sx={{ mx: "auto !important" }}>
          <Stack>
            <a href='/signup'>
              <IconButton aria-label="logo">
                <SettingsIcon />
              </IconButton>
            </a>
          </Stack>
          <IconButton
            onClick={handleLogout}
          >
            <LogoutIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BasicDashboard;
