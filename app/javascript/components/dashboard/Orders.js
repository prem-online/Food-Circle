import React, {useState,
  useEffect
} from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,ButtonGroup,Stack,IconButton,
  Typography,Button
} from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import {BUTTONS, BASE_URL} from '../../constants'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import OrderSkeleton from './skeletons/OrderSkeleton'
import { useLogin } from '../../helpers/useLogin';
import {readTime} from '../../helpers/common'
const Orders = () => {
  const [orders, setOrders] = useState('');
  const token = useLogin()

  
  useEffect(() => {
    if(token!=''){
      const fetchOrders = async () => {
        const response = await fetch(`${BASE_URL}api/v2/latest_orders/`, {
          headers: {
            'token': `${token}`
          }
        });
        const data = await response.json();
        setOrders(data.data);
      };
      fetchOrders();
    }
  },[token]);

  const handleDelete = async (order) => {
    const url = `${BASE_URL}api/v2/orders/${order.id}`;
    await axios.delete(url, { headers: { token: token } })
     .then(response => {
        setOrders(orders.filter(o=>o.id!== order.id))
      })
     .catch((error) => {
          console.log('error'+ error);
        });
  }

  return (
    <div>
      <ButtonGroup>
        <Button variant="text" sx={BUTTONS.PRIMARY} href="/order/list">
          Latest Orders
        </Button>
        <a href="/orders/new"><AddBoxIcon /></a>
      </ButtonGroup>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> <Typography variant='body1'>Order Number</Typography></TableCell>
              <TableCell><Typography variant='body1'>Order Items</Typography></TableCell>
              <TableCell><Typography variant='body1'></Typography>Order Date</TableCell>
              <TableCell><Typography variant='body1'></Typography>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
            orders==''? (
              <>
                <OrderSkeleton/>
                <OrderSkeleton/>
                <OrderSkeleton/>
                <OrderSkeleton/>
                <OrderSkeleton/>
              </>
              
            ) :
            (orders.map((order) => (
              <TableRow
                key={order.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order.attributes.order_number}
                </TableCell>
                <TableCell>{order.attributes.order_items[0].name}</TableCell>
                <TableCell>{readTime(order.attributes.created_at)}</TableCell>
                <TableCell align="right">
                  <Stack direction="row">
                    <Stack direction="row">
                      <a href={`/orders/${order.id}/edit`} target="_self">
                        <IconButton size="small" aria-label="edit" >
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </a>
                    </Stack>
                    <Stack direction="row">
                      <IconButton 
                        aria-label="delete" size="small"
                        onClick={()=>handleDelete(order)}
                        >
                        <DeleteIcon fontSize="small"/>
                      </IconButton>
                    </Stack>
                      </Stack> 
                </TableCell>
              </TableRow>
            )))
            
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Orders
