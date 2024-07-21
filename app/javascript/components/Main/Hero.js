import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography, Stack, ButtonGroup, Button } from '@mui/material';
import { Card, CardContent, Typography, Button, Grid, Container } from '@mui/material';
import Navbar from './Navbar';
export default function Hero() {
  return (
    <>
      <Navbar></Navbar>
      <Container maxWidth="l"
          sx={{paddingRight: 0, marginRight: 0}}
      >
        <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' },height: 'calc(100vh - 48px)', boxShadow: 'none' }}>
          <Grid container>
            <Grid item xs={6} sm={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', pl: 0 }}>
              <CardContent>
                <Typography variant="h2" component="div" gutterBottom>
                  Transforming Food Businesses with Powerful Software Solutions
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  Our software solutions revolutionize the way food businesses operate, streamlining processes and boosting efficiency.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mr: 2 }}>Learn More</Button>
                <Button variant="outlined" href="signup">Sign Up</Button>
              </CardContent>
            </Grid>
            <Grid item xs={18} sm={7}>
              <div style={{
                backgroundColor: '#e0e0e0 ',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
              }}>
                <img src='https://cdn.pixabay.com/photo/2022/06/07/21/00/chicken-7249273_1280.jpg'
                style={{ width: '100%', height: '100%' }} />
              </div>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
}