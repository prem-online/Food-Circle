import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';

import BasicDashboard from '../dashboard/BasicDashboard';

import { useLogin } from '../../helpers/useLogin';
import { BASE_URL } from '../../constants';
import { sleep, readTime } from '../../helpers/common';
import axios from 'axios';

const ShowOrder = () => {
  const { id } = useParams();
  const [order, setOrder] = useState('');
  const [loading, setLoading] = useState(true);

  const token = useLogin()
  useEffect(()=>{
    const callOrderShowApi = async () => {
      setLoading(true);
      await sleep(1000); // Simulate delay
      const url = `${BASE_URL}api/v2/orders/${id}`
      axios.get(url, { headers: { token: token } })
      .then(response => {
        console.log(response)
          setOrder(response.data.data);
          setLoading(false);
        })
      .catch((error) => {
          console.log('error ' + error);
        });
    };
  
    if (token != ''){
      callOrderShowApi();
    }
  },[token])

  return (
    <>
      <BasicDashboard/>
      <Container>
        <h1>Order ID: {id}</h1>
        {loading ? (
          <p>Loading...</p>
        ):(
          <>
            <p>Order Number: {order.attributes.order_number}</p>
            <p>Total: {order.attributes.total}</p>
            <p>Order Date: {readTime(order.attributes.created_at)}</p>
            <p>Order Items:</p>
            <ul>
              {order.attributes.order_items.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </>
        )}
      </Container>
    </>
  )
}

export default ShowOrder
