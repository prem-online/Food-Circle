import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Container, Box,Stack,
  TextField, Button,
} from '@mui/material'

import PopUp from './PopUp'
import EditFormSkeleton from './EditFormSkeleton';
import { useLogin } from '../../helpers/useLogin';
import { sleep } from '../../helpers/common';
import { BASE_URL } from '../../constants';

const EditForm = (productData) => {
  const [name,setName] = useState('');
  const [price, setPrice] = useState('');
  const { id } = useParams();
  const token = useLogin();
  const [open, setOpen]= useState(false)
  const [popUpType, setPopUpType]= useState('success')
  const [popUpMessage, setPopUpMessage]= useState('')

  useEffect(()=>{
    if (productData.productData != ''){
      setName(productData.productData.attributes.name)
      setPrice(productData.productData.attributes.price)
    }
  },[productData])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${BASE_URL}/api/v2/products/${id}`;
    const data = {
      "products": {
        "name": name,
        "price": price
      }
    }
    axios.patch(url,data,{headers: {'Content-Type': 'application/json', token: token}})
    .then((response) => {
      setOpen(true)
      setPopUpMessage('Product updated successfully')
      sleep(1000);
    }).catch((error)=> {
        setOpen(true)
        setPopUpType('error')
        setPopUpMessage('Cannot update product.')
        sleep(3000)
      }
    )
  }
  const handleClose = ()=> setOpen(false)
  
  return (
    <Container component="form"
    onSubmit={handleSubmit}
  >
    <Box  
      p={2}
      my={4}
      alignItems="stretch"
      gap={4}
      sx={{
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {
        name == ''?(<EditFormSkeleton/>)
        :(
          <Box>
            <PopUp 
              popup_type={popUpType} 
              message={popUpMessage}
              handleClose={handleClose}
              open={open}
              />
            <Stack spacing={2}>
              <TextField id="outlined-name" label="Name" variant="outlined"
                onChange={ (e)=> setName(e.target.value)}
                defaultValue={`${name}`}
                />
              <TextField id="outlined-price" label="Price" variant="outlined" 
                onChange={(e) => setPrice(e.target.value) } 
                defaultValue={`${price}`}
                />
            </Stack>
          </Box>
        )
      }
        <Stack direction="column" spacing={1}>
          <Button type="submit" variant="contained">Edit</Button>
          <Button href="/menu/list" variant="outlined">Back</Button>
        </Stack>
    </Box>
  </Container>
  )
}

export default EditForm
