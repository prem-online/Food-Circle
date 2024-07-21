import { 
  Container, Box,
  TextField, Button,
} from '@mui/material'
import React from 'react'

const Form = ({handleSubmit,onNameChange,onPriceChange}) => {
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
        <TextField id="outlined-name" label="Name" variant="outlined"
          onChange={(onNameChange)}/>
        <TextField id="outlined-price" label="Price" variant="outlined" 
         onChange={(onPriceChange)}/>
        <Button type="submit" variant="contained">Create</Button>
      </Box>
    </Container>
  )
}

export default Form
