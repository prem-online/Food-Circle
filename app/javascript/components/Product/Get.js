import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants'
import { useLogin } from '../../helpers/useLogin'
const Get = (id) => {
  // fetch data from server using id
  const [product, setProduct] = useState([])
  const token = useLogin();
  useEffect(() => {
    if(token != ''){
      getProduct();
    }
  },[token])

  const str = "prem here"
  const getProduct = () =>{
    const url = `${BASE_URL}api/v2/products/${id}`;
    axios.get(url, {headers: {token: token}})
     .then(response => {
        setProduct(response.data.data);
      })
     .catch(error => {
        console.error('Error:', error);
      });
  }
 
  return (
    {product: product}
  )
}

export default Get
