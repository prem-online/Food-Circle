import { 
  Container, Box,Stack,
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
         <Stack direction="column" spacing={1}>
          <Button type="submit" variant="contained">Create</Button>
          <Button href="/menu/list" variant="outlined">Back</Button>
        </Stack>

      </Box>
    </Container>
  )
}

export default Form
