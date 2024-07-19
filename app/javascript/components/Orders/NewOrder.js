import React, {useState, useEffect} from 'react'
import {Container, Stack, Button,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, 
  TextField, Fab, Snackbar, Alert, IconButton} from '@mui/material';

import axios from 'axios';

import BasicDashboard from '../dashboard/BasicDashboard';
import OrderSkeleton from './OrderSkeleton';

import { useLogin } from '../../helpers/useLogin';

import { BASE_URL, MODULE_SUCCESSFULL_CREATED } from '../../constants';

import { sleep, extractInteger, transformData } from '../../helpers/common';

const NewOrder = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productQuantity, setProductQuantity] = useState({})
  const token = useLogin();
  const [open, setOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [severity, setSeverity] = useState('success');
  
  useEffect(() =>{
    if (token != ''){
      fetchMenuItems();
    }
  },[token])

  useEffect(()=>{
  },[productQuantity])

  const fetchMenuItems = async() => {
    await sleep(1000); // Simulate delay
    const url = `${BASE_URL}/api/v1/products`
    axios.get(url, { headers: { token: token } })
    .then(response => {
      setMenuItems(response.data.data);
        setLoading(false);
      })
    .catch((error) => {
        console.log('error ' + error);
      });
  }

  const showQuantity = (id, caller="addQuantity") => {
    if(caller==="row"){
      const ids = Object.keys(productQuantity).map(k=> `${extractInteger(k)}`)
      if(!ids.includes(`${id}`)){
        return '' 
      }
      const quantity = productQuantity[`pd-${id}`] 
      quantity === undefined ? '' : quantity
      return quantity
    }else{
      document.getElementById(`quantity${id}`).value = productQuantity[`pd-${id}`]
    }
  }

  const addQuantity = (id, quantity) => {
    if (Object.keys(productQuantity).length === 0){
      setProductQuantity({ [`pd-${id}`]: quantity })
    }else{
      const newQuantity = productQuantity[`pd-${id}`] === undefined ? quantity : productQuantity[`pd-${id}`]+quantity
      let obj = productQuantity;
      obj[`pd-${id}`] = newQuantity;
      setProductQuantity(obj);
    }
    showQuantity(id,"addQuantity")
  }
 
  const handleSubmit = async (event)=>{
    event.preventDefault();
    const productData = transformData(productQuantity)
    const data = {
      "order": {
        "total": 100,
        "order_items_attributes": productData
      }
    };
    try {
    const response = await axios.post(`${BASE_URL}/api/v2/orders`, data, {
      headers: {
        'Content-Type': 'application/json',
        'token': token
      }
    })
    setResponseMessage(`Order ${MODULE_SUCCESSFULL_CREATED}`);
    setOpen(true);
    setSeverity('success');
    await sleep(3000);
    window.location.href = '/order/list';

    }catch (error) {
      setResponseMessage(error.response.data[0]);
      setOpen(true);
      setSeverity('error');
      console.error('Error:', error);
    }

  }

  const handleClose = () =>{
    setOpen(false);
  }
  return (
    <>
      <BasicDashboard />
      <Snackbar 
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={open}
            autoHideDuration={3000}
            key={'top' + 'center'}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose}
                severity={severity}
                variant="filled"
                sx={{ width: '100%' }}
            >
             {responseMessage}
            </Alert>
        </Snackbar>
      <Container component="form" onSubmit={ handleSubmit}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Sn</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
              loading ? (
                <>
                  <OrderSkeleton/>
                  <OrderSkeleton/>
                  <OrderSkeleton/>
                  <OrderSkeleton/>
                  <OrderSkeleton/>
                </>
              ):(
              menuItems.map((row,index) => (
                <TableRow
                  key={row.id}
                >
                  <TableCell>
                    {index+1}
                  </TableCell>
                  <TableCell>{row.attributes.name}</TableCell>
                  <TableCell>
                    
                    <TextField width={10} id={"quantity"+row.id} label="" variant="outlined"
                      size="small"
                      value={showQuantity(row.id,'row')}
                      />
                    <Stack mt={1}>
                      <Stack direction="row" spacing={2}>
                      <Fab ml={2} color="primary" aria-label="add" onClick={()=> {addQuantity(row.id,1)}}>
                        +1
                      </Fab>
                      <Fab color="primary" aria-label="add" onClick={()=> {addQuantity(row.id,3)}}>
                        +3
                      </Fab>
                      <Fab color="primary" aria-label="add" onClick={()=> {addQuantity(row.id,10)}}>
                        +10
                      </Fab>
                      </Stack>
                    </Stack>

                  </TableCell>
                  <TableCell>{row.attributes.price}</TableCell>
                </TableRow>
              )))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack direction="row" >
          <Stack spacing={2} sx={{ mx: "auto", pb: 1, pt: 1 }} >
            <Button type="submit" variant='contained'>
              Confirm
            </Button>
            <Button variant='outlined' href='/order/list'>
              Go Back
            </Button>
          </Stack>
        </Stack>

      </Container>
    </>
  )
}

export default NewOrder
