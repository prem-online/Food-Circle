import React from 'react'
import BasicDashboard from '../dashboard/BasicDashboard'
import Form from './Form'
import { Container } from '@mui/material'

const NewMenu = () => {
  return (
    <>
     <BasicDashboard/>
     <Container>
       <Form/>
     </Container>
    </>
  )
}

export default NewMenu
