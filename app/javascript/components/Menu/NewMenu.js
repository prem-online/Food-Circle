import React,{useEffect, useState} from 'react'
import axios from 'axios'

import UserDashboard from '../dashboard/UserDashboard'
import Form from './Form'
import PopUp from './PopUp'
import { useLogin } from '../../helpers/useLogin'
import { BASE_URL } from '../../constants'
import { sleep, handleReload } from '../../helpers/common'
const NewMenu = () => {
  const [name,setName]= useState()
  const [price, setPrice]= useState()
  const [loading, setLoading]= useState(true)
  const [open, setOpen]= useState(false)
  const [popUpType, setPopUpType]= useState('success')
  const [popUpMessage, setPopUpMessage]= useState('')

  const token = useLogin()
  useEffect(() =>{
    if (token != ''){
      setLoading(false);
    }
  },[token])

  const createOrder = async () => {
    const url = `${BASE_URL}api/v2/products/`;
    const data = {
      "products": {
        "price": price,
        "name": name
      }
    }
    await axios.post(url,data,{ headers: { token: token } })
    .then(async response => {
      setOpen(true)
      setPopUpMessage('Product added successfully')
      await sleep(1000);
      handleReload()
    })
    .catch((error) => {
        console.log('error ' + error);
        setOpen(true)
        setPopUpType('error')
        setPopUpMessage('Something went wrong')
        sleep(3000)
      });
  }
  const handleSubmit = async (event)=>{
    event.preventDefault();
    await createOrder();
  }

  const onNameChange = (e)=>setName(e.target.value)
  const onPriceChange = (e)=>setPrice(e.target.value)
  const handleClose = ()=> setOpen(false)

  return (
    <>
     <UserDashboard/>
     {loading ?(
       <div>Loading...</div>
     ):(
      <>
        <PopUp 
          popup_type={popUpType} 
          message={popUpMessage}
          handleClose={handleClose}
          open={open}
        />
        <Form 
        handleSubmit={handleSubmit}
        onNameChange={onNameChange}
        onPriceChange={onPriceChange}
        />
      </>
     )}
    
    </>
  )
}

export default NewMenu
