import React from 'react'
import {Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from 'react';

const MuiButton = () => {
  const [format,setFormat] = useState<string|null>(null);
  console.log(format);
  const handleFormatChange=(_event: React.MouseEvent<HTMLElement>, updateFormats: string|null)=>{
    setFormat(updateFormats)
  }
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction='row'>
        <Button variant='text' href='https://google.com'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
      </Stack>

      <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary'>Primary</Button>
        <Button variant='contained' color='secondary'>Secondary</Button>
        <Button variant='contained' color='error'>Error</Button>
        <Button variant='contained' color='warning'>Warning</Button>
        <Button variant='contained' color='info'>Info</Button>
        <Button variant='contained' color='success'>Success</Button>
        <Button variant='contained' color='grey'>Grey</Button>
      </Stack>

       <Stack spacing={2} direction='row'>
        <Button variant='text' color='primary'>Primary</Button>
        <Button variant='text' color='secondary'>Secondary</Button>
        <Button variant='text' color='error'>Error</Button>
         <Button variant='text' color='warning'>Warning</Button>
        <Button variant='text' color='info'>Info</Button>
        <Button variant='text' color='success'>Success</Button>
      </Stack>
      
      <Stack spacing={2} direction='row'>
        <Button variant='outlined' color='primary'>Primary</Button>
        <Button variant='outlined' color='secondary'>Secondary</Button>
        <Button variant='outlined' color='error'>Error</Button>
        <Button variant='outlined' color='warning'>Warning</Button>
        <Button variant='outlined' color='info'>Info</Button>
        <Button variant='outlined' color='success'>Success</Button>
        {/* <Button variant='outlined' color='grey'>Grey</Button> */}
      </Stack>
      
      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' size='small'>Small</Button>
        <Button variant='contained' size='medium'>Medium</Button>
        <Button variant='contained' size='large'>Large</Button>
      </Stack>
      <Stack spacing={2} direction='row'>
        <Button variant='contained' startIcon={<SendIcon></SendIcon>}>Send</Button>
        <Button variant='contained' endIcon={<SendIcon></SendIcon>}>Send</Button>
        <IconButton aria-label='send' color='success' size='small'>
          <SendIcon></SendIcon>
        </IconButton>
      </Stack>

      <Stack spacing={2} direction='row'>
        <Button variant='contained' disableElevation>disableElevation</Button>
        <Button variant='contained' disableRipple>disableRipple</Button>
        <Button variant='contained' onClick={()=>{alert('Clicked')}}>Click me</Button>
      </Stack>

      <Stack direction='row'>
        <ButtonGroup varaint='outlined' orientation='vertical' size='medium' color='success'>
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction='row'>
        <ToggleButtonGroup aria-label='text formatting' value={format} onChange={handleFormatChange} size='small' color='primary' orientation='vertical'
        exclusive
        >
          <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon/></ToggleButton>
          <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon/></ToggleButton>
          <ToggleButton value='underline' aria-label='underline'><FormatUnderlinedIcon/></ToggleButton>

        </ToggleButtonGroup>
      </Stack>
    </Stack>
  )
}

export default MuiButton
