// Home.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import CheckIcon from '@mui/icons-material/Check';
import Link from '@mui/material/Link';

const Home = () => {
  return (
    <div>
      {/* Navbar/Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FoodBizTech
          </Typography>
          <Link href="#" color="inherit" underline="none">
            <Button color="inherit">Home</Button>
          </Link>
            <Button color="inherit" component={Link} to="/features">Features</Button>
          <Link href="#pricing" color="inherit" underline="none">
            <Button color="inherit">Pricing</Button>
          </Link>
          <Link href="#contact" color="inherit" underline="none">
            <Button color="inherit">Contact</Button>
          </Link>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container>
          <Typography variant="h2" align="center" gutterBottom>
            Empower Your Food Business
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Track orders, manage inventory, and streamline billing with FoodBizTech.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" color="secondary" size="large">
              Get Started
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Key Features
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Typography variant="h5" align="center">
              Order Tracking
            </Typography>
            <Typography align="center">
              Track orders from placement to delivery with ease.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" align="center">
              Inventory Management
            </Typography>
            <Typography align="center">
              Keep track of your stock levels and receive alerts for low inventory.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" align="center">
              Billing Solutions
            </Typography>
            <Typography align="center">
              Generate invoices and manage billing efficiently.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            What Our Clients Say
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Typography variant="body1" align="center" paragraph>
                "FoodBizTech has revolutionized how we manage orders and inventory. Highly recommended!"
              </Typography>
              <Typography variant="subtitle1" align="center">
                - John Doe, Restaurant Owner
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" align="center" paragraph>
                "We've seen a significant improvement in our billing process since implementing FoodBizTech."
              </Typography>
              <Typography variant="subtitle1" align="center">
                - Jane Smith, Caterer
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 8 }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Ready to take your food business to the next level? Contact us today!
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" color="secondary" size="large">
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <AppBar position="static" sx={{ mt: 4 }}>
        <Toolbar>
          <Container sx={{ flexGrow: 1 }}>
            <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
              &copy; {new Date().getFullYear()} FoodBizTech. All rights reserved.
            </Typography>
          </Container>
          <Button color="inherit">Terms of Service</Button>
          <Button color="inherit">Privacy Policy</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Home;
