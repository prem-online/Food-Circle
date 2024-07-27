import React, {useEffect,useState} from 'react'
import {Container, Box,Stack,
  TextField, Button,
} from '@mui/material'
import EditFormSkeleton from './EditFormSkeleton';
const EditForm = (productData) => {
  const [name,setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(()=>{
    if (productData.productData != ''){
      setName(productData.productData.attributes.name)
      setPrice(productData.productData.attributes.price)
      console.log(name, price)  // for testing purpose, remove in production.
    }
  },[productData, name, price])

  const handleSubmit = (e) => {
    e.preventDefault();
    // make api call here
  }
  
  const onNameChange = (e) => {
    setName(e.target.value);
  }
  
  const onPriceChange = (e) => {
    setPrice(e.target.value);
  }
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
          <Stack spacing={2}>
            <TextField id="outlined-name" label="Name" variant="outlined"
              onChange={(onNameChange)} defaultValue={name}/>
            <TextField id="outlined-price" label="Price" variant="outlined" 
            onChange={(onPriceChange)} defaultValue={price}/>
          </Stack>
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
