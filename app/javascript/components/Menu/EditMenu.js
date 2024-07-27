import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';

import EditForm from './EditForm'
import BasicDashboard from '../dashboard/BasicDashboard'
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
     <BasicDashboard />
     <EditForm productData={productData}/> 
    </>
  )
}

export default EditMenu
