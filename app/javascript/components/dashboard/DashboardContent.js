import React from 'react'
import { Container, Box, Paper, Grid, Stack,
  Typography } from '@mui/material'
import { styled } from '@mui/material/styles';

import UserDashboard from './UserDashboard'
import BestSeller from './BestSeller'
import Orders from './Orders';
import Analytics from './Analytics';
const DashbaordContent = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <UserDashboard/>
      <Container>
      <Box sx={{ flexGrow: 1, mt: 2 }}>
        <Stack direction="row" mt={2} mb={4} spacing={6} sx={{display: 'flex', justifyContent: 'center'}}>
          <Analytics day="Today's"/>
          <Analytics day="Today's"/>
          <Analytics day="Today's"/>
        </Stack>

        <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
              <BestSeller/>
            </Grid>
            <Grid item xs={6} md={8}>
              <Orders/>
            </Grid>
        </Grid>
        
      </Box>
      </Container>
    </div>
  )
}

export default DashbaordContent
