import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Stack, Pagination, Container, Button,
  IconButton,
  Typography
 } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BasicDashboard from '../dashboard/BasicDashboard';
import OrderSkeleton from './OrderSkeleton';

import {sleep, readTime} from '../../helpers/common';
import { useLogin } from '../../helpers/useLogin';

import { BASE_URL } from '../../constants';
const OrderList = () => {
  const [page, setPage] = useState(1);
  const tableRef = useRef(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = useLogin()
  
  useEffect(()=>{
    const callOrderListApi = async () => {
      setLoading(true);
      await sleep(1000); // Simulate delay
      const url = `${BASE_URL}api/v1/orders?page=${page}&per=10`
      axios.get(url, { headers: { token: token } })
      .then(response => {
        console.log(response)
        console.log(page)
          setOrders(response.data.data);
          setLoading(false);
        })
      .catch((error) => {
          console.log('error ' + error);
        });
    };
  
    if (token != ''){
      callOrderListApi();
    }
  },[token, page])

  const handlePagination = (e, value) => {
    setPage(value);
  };


  const orderItemPresenter = (order, first_arr_or_count) => {
      const order_items_array = order.attributes.order_items.map(oi=> oi.name)
      switch (first_arr_or_count) {
        case 'first':
          return order_items_array[0]
        default:
          return order_items_array.length;
      }
  }
 
  return (
    <>
      <BasicDashboard />
      <Container>
        <Stack direction='row' mb={2}>
          <Button variant='contained' href='/orders/new'>
            New Order
          </Button>
        </Stack>
        <TableContainer component={Paper}
        >
          <Table ref={tableRef}>
            <TableHead>
              <TableRow>
                <TableCell>
                  Order Number
                </TableCell>
                <TableCell>Ordered Items</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Order Date</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <>
                  <OrderSkeleton/>
                  <OrderSkeleton/>
                  <OrderSkeleton/>
                  <OrderSkeleton/>
                  <OrderSkeleton/>
                </>
              ) : (
                orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>
                      <Button variant='text' href={`/orders/${order.id}`}>
                        {order.attributes.order_number}
                      </Button>
                    </TableCell>
                    <TableCell>
                      {orderItemPresenter(order,'first')}
                      {
                        orderItemPresenter(order,'length') > 1 ? (
                          <a href='#'> See all</a>
                        ):(<></>)
                      }
                    </TableCell>
                    <TableCell>{order.attributes.total}</TableCell>
                    <TableCell>{readTime(order.attributes.created_at)}</TableCell>
                    <TableCell>
                      <IconButton size="small" aria-label="edit" >
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton aria-label="delete" size="small">
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack  
          >
          <Pagination sx={{ mx: "auto", pb: 1, pt: 1 }} count={10} color="primary" onChange={handlePagination} />
        </Stack>
      </Container>
    </>
  );
};

export default OrderList;
