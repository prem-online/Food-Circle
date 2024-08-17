import React, { useEffect, useState } from 'react'
import { Container, Box, Paper, Grid, Stack,
  Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import axios from 'axios';
import UserDashboard from './UserDashboard'
import BestSeller from './BestSeller'
import Orders from './Orders';
import Analytics from './Analytics';
import OrderGraph from './graphs/OrderGraph'
import BestSellerGraph from './graphs/BestSellerGraph';
import {useLogin} from '../../helpers/useLogin'
import { BASE_URL } from '../../constants';

const DashbaordContent = () => {
  const [saleToday, setSalesToday] = useState('')
  const [saleYesterday, setSalesYesterday] = useState('')
  const [salesWeek, setSalesWeek] = useState('')
  const [orderChart, setOrderChart] = useState('')
  const [orderChartLoading, setOrderChartLoading] = useState(true)
  const token = useLogin();

  const getSalesData = async () =>{
    let url = `${BASE_URL}/api/v2/sales/today`
    await getRequest(url, setSalesToday)
    url = `${BASE_URL}/api/v2/sales/yesterday`
    await getRequest(url, setSalesYesterday)
    url = `${BASE_URL}/api/v2/sales/week`
    await getRequest(url, setSalesWeek)
  }

  const getOrderChart = async ()=>{
    const url = `${BASE_URL}/api/v2/graphs/orders`
    await axios.get(url, {headers: {token: token}})
   .then((response) => {
    setOrderChart(response.data.result)
    setOrderChartLoading(false);
  })
   .catch((error)=>console.error(error))
  }

  useEffect(() => {
    if(token!= ''){
      getSalesData();
      getOrderChart();
    }
  },[token])

  const getRequest = async (url, setFunc) =>{
    await axios.get(url, {headers: {token: token}})
   .then((response) => {
    setFunc(response.data.sales)
  })
   .catch((error)=>console.error(error))
  }
  return (
    <div>
      <UserDashboard/>
      <Container>
        <Box sx={{ flexGrow: 1, mt: 2 }}>
          <Stack direction="row" mt={2} mb={4} spacing={6} sx={{display: 'flex', justifyContent: 'center'}}>
            <Analytics day="Yesterday's" data={saleYesterday}/>
            <Analytics day="Today's" data={saleToday}/>
            <Analytics day="Weekly" data={salesWeek}/>
          </Stack>

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <BestSellerGraph title="Best Seller Matrix" subtitle="Subtitle" graphData='orders'/>
            </Grid>
            <Grid item xs={6}>
              <OrderGraph title="Order Matrix" subtitle="Subtitle" graphData='orders'/>
            </Grid>
          </Grid>

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
