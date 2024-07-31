import React, {useState, useEffect, useRef} from 'react'
import { useParams } from 'react-router-dom';
import { Container, Stack, Button, Box, Grid,
  TableContainer, Table, TableHead, TableRow, TableCell, TableBody,
  Paper, TextField, Typography
 } from '@mui/material';

import UserDashboard from '../dashboard/UserDashboard';

import { useLogin } from '../../helpers/useLogin';
import { BASE_URL } from '../../constants';
import { sleep, readTime } from '../../helpers/common';
import axios from 'axios';

const ShowOrder = () => {
  const { id } = useParams();
  const [order, setOrder] = useState('');
  const [loading, setLoading] = useState(true);
  const tableRef = useRef(null);

  const token = useLogin()
  useEffect(()=>{
    const callOrderShowApi = async () => {
      setLoading(true);
      await sleep(1000); // Simulate delay
      const url = `${BASE_URL}api/v2/orders/${id}`
      axios.get(url, { headers: { token: token } })
      .then(response => {
        console.log(response)
          setOrder(response.data.data);
          setLoading(false);
        })
      .catch((error) => {
          console.log('error ' + error);
        });
    };
  
    if (token != ''){
      callOrderShowApi();
    }
  },[token])

  return (
    <>
      <UserDashboard/>
      <Container>
        <h1>Order Details</h1>
        {loading ? (
          <p>Loading...</p>
        ):(
          <Box>
            <Grid container rowSpacing={2} columnSpacing={{xs:1, sm: 2, md: 3}}>
              <Grid item xs={6}>
                <p>Order Number: {order.attributes.order_number}</p>
              </Grid>
              <Grid item xs={6}>
                <p>Order Date: {readTime(order.attributes.created_at)}</p>
              </Grid>
            </Grid>
            <strong sx={{mb:2}}>Order Items</strong>
            <TableContainer component={Paper}
            sx={{mb:2}}
            >
              <Table ref={tableRef}>
                <TableHead>
                  <TableRow key="GURU">
                    <TableCell>Name</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Unit Price</TableCell>
                    <TableCell>SubTotal</TableCell>
                  </TableRow>
                </TableHead>
                  <TableBody>
                    {order.attributes.order_items.map((item,index) => (
                      <TableRow key={`${item.id}+${index}`}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>
                          {item.quantity}
                        </TableCell>
                        <TableCell>{item.unit_price}</TableCell>
                        <TableCell>{item.sub_total}</TableCell>
                      </TableRow>
                    ))}
                     <TableRow key={`total-${order.id}`}>
                        <TableCell>
                          <strong>Total</strong>
                        </TableCell>
                        <TableCell>{}</TableCell>
                        <TableCell>{}</TableCell>
                        <TableCell>
                          <strong>
                            {order.attributes.total}
                          </strong>
                        </TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
            </TableContainer>
            
            <Stack direction="row" spacing={2}>
              <Button variant='contained' href="/order/list">
                Back
              </Button>
            </Stack>
          </Box>
        )}
      </Container>
    </>
  )
}

export default ShowOrder
