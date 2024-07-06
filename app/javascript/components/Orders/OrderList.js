import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Stack, Pagination } from '@mui/material';
import BasicDashboard from '../dashboard/BasicDashboard';
import {sleep, readTime} from '../../helpers/common';
import { useLogin } from '../../helpers/useLogin';
import { BASE_URL } from '../../constants';
const OrderList = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 2;
  const tableRef = useRef(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = useLogin()
  
  useEffect(()=>{
    if (token != ''){
      callOrderListApi();
    }
  },[token, page])

  const handlePagination = (e, value) => {
    setPage(value);
  };

  const callOrderListApi = async () => {
    await sleep(1000); // Simulate delay
    console.log(token);
    const url = `${BASE_URL}api/v1/orders`
    axios.get(url, { headers: { token: token } })
    .then(response => {
        setOrders(response.data.data);
        console.log(response.data.data);
        setLoading(false);
      })
    .catch((error) => {
        console.log('error ' + error);
      });
  };

  const orderItemPresenter = (order, first_arr_or_count) => {
      const order_items_array = order.attributes.order_items.map(oi=> oi.name)
      console.log('Length');
      console.log(order_items_array.length);
      switch (first_arr_or_count) {
        case 'first':
          return order_items_array[0]
        default:
          return order_items_array.length;
      }
  }
  return (
    <div>
      <BasicDashboard />
      <TableContainer component={Paper}>
        <Table ref={tableRef}>
          <TableHead>
            <TableRow>
              <TableCell>Order Number</TableCell>
              <TableCell>Ordered Items</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Order Date</TableCell>

              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6}>Loading...</TableCell>
              </TableRow>
            ) : (
              orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.attributes.order_number}</TableCell>
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
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack direction="row" spacing={4} ml={4} mr={2} sx={{ mx: 'auto', pb: 1, pt: 1 }}>
        <Pagination count={10} color="primary" onChange={handlePagination} />
      </Stack>
    </div>
  );
};

export default OrderList;
