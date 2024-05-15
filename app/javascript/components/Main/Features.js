// Features.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const Features = () => {
  return (
    <div>
      {/* Navbar/Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FoodBizTech
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Key Features
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Order Tracking
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="Track orders from placement to delivery." />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText primary="Receive real-time updates on order status." />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText primary="Easily manage order history." />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Inventory Management
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="Keep track of stock levels." />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText primary="Receive alerts for low inventory." />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText primary="Streamline inventory replenishment." />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Billing Solutions
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="Generate invoices with ease." />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText primary="Automate billing processes." />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText primary="Easily manage client billing information." />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <AppBar position="static" sx={{ mt: 4 }}>
        <Toolbar>
          <Container sx={{ flexGrow: 1 }}>
            <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
              &copy; {new Date().getFullYear()} FoodBizTech. All rights reserved.
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Features;
