import React from 'react';
import { Card, CardContent, Typography, Button, Grid, Container, IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Efficiency = () => {
  return (
    <Container maxWidth="l" sx={{ mt: 8, mb: 8 }}>
      <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, height: '600px', boxShadow: 'none'}}>
        <Grid container  sx={{height:'100%'}}>
          <Grid item xs={12} sm={5}>
            <div style={{
              backgroundColor: '#e0e0e0',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
            }}>
              <img src="https://cdn.pixabay.com/photo/2022/08/31/10/18/donuts-7422979_1280.jpg" alt="Placeholder" style={{ width: '100%', height: '100%' }} />
            </div>
          </Grid>
          <Grid item xs={12} sm={7} sx={{ boxShadow: 'none'}}>
            <CardContent sx={{ml:6, mr:6, mt:9}}>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Efficiency
              </Typography>
              <Typography variant="h2" component="div" gutterBottom>
                Streamline Your Inventory Management with Our Software
              </Typography>
              <Typography variant="h5" component='div' color="textSecondary" paragraph>
                Our software provides powerful tools to help you efficiently manage your inventory. With features like real-time tracking, automated stock alerts, and comprehensive reporting, you can stay on top of your inventory and make data-driven decisions.
              </Typography>
              <Button variant="outlined" sx={{ mr: 2 }}>Learn More</Button>
              <Button variant="text" endIcon={<ChevronRightIcon />} href="/signup">Sign Up</Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default Efficiency;