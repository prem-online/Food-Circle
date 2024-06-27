import React from 'react';
import { Card, CardContent, Typography, Button, Grid, Container } from '@mui/material';

const Chatgpt = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 8, mb: 8 }}>
      <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, height: '600px' }}>
        <Grid container sx={{ height: '100%' }}>
          <Grid item xs={12} sm={7} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', pl: 4 }}>
            <CardContent>
              <Typography variant="h4" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
                Transforming Food Businesses with Powerful Software Solutions
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                Our software solutions revolutionize the way food businesses operate, streamlining processes and boosting efficiency.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mr: 2 }}>Learn More</Button>
              <Button variant="outlined">Sign Up</Button>
            </CardContent>
          </Grid>
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
        </Grid>
      </Card>
    </Container>
  );
};

export default Chatgpt;
