import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';

import EditForm from './EditForm'
import UserDashboard from '../dashboard/UserDashboard'
import Get from '../Product/Get';
const EditMenu = () => {
  const { id } = useParams();
  const product = Get(id);
  const [productData, setProductData] = useState('');
  useEffect(() => {
    if(!Array.isArray(product)){
      setProductData(product.product)
    }
  }, [product])
  return (
    <>
     <UserDashboard />
     <EditForm productData={productData}/> 
    </>
  )
}

export default EditMenu
