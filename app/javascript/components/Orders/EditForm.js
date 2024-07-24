import React, {useState, useEffect} from 'react'
import { Container, TableContainer, Table, TableHead, TableRow,
  Stack, Button, TextField, Fab, Snackbar, Alert, IconButton,
  Paper, TableCell, TableRow, TableBody
  } from "@mui/material"
import axios from "axios"
import { useLogin } from '../../helpers/useLogin';
import { sleep, extractInteger, transformData } from '../../helpers/common';
import OrderSkeleton from './OrderSkeleton';
import { BASE_URL } from '../../constants';

const EditForm = ({data, id}) => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productQuantity, setProductQuantity] = useState({})
  const [orderItems, setOrderItems] = useState([]);
  const token = useLogin();
  useEffect(() =>{
    if (token != ''){
      fetchMenuItems();
    }
    
    if (data!=''){
      switch (data.type){
        case 'order':
          const items = data.attributes.order_items.map(item => ({
            id: item.product_id,
            quantity: item.quantity,
            order_item_id: item.id
          }))
          const items_hash = items.reduce((acc, item) => {
            acc[`pd-${item.id}`] = item.quantity;
            return acc;
          }, {});
          setOrderItems(items)
          setProductQuantity(items_hash)
          break;
        default:
          return 0
      }

    }
  },[token, data])

  useEffect(()=>{
  },[productQuantity])

  const setOrderItemId = (product_id)=>{
   return orderItems.filter(item => item['id'] == product_id)[0]['order_item_id']
  }

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
  const updateMenuItem = async(product_id) => {
    await sleep(2000);
    const order_item_id = setOrderItemId(product_id)
    const quantity = productQuantity[`pd-${product_id}`]
    const url = `${BASE_URL}/api/v2/order_items/${order_item_id}`
    const data={
      "order_item":{
        "quantity": quantity,
        "product_id": product_id
      }
    }
    axios.patch(url, data,{ headers: { token: token } })
    .then(response => {
      console.log(response);
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
    updateMenuItem(id)
    showQuantity(id,"addQuantity")
  }
 
  return (
    <Container component="form" onSubmit={handleSubmit}>
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
              sx={{display: {xs: showQuantity(row.id,'row') == '' ? 'none': ''}}}
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
        {/* <Button type="submit" variant='contained'> */}
          {/* Confirm */}
        {/* </Button> */}
        <Button variant='outlined' href='/order/list'>
          Go Back
        </Button>
      </Stack>
    </Stack>

  </Container>
  )
}

export default EditForm
