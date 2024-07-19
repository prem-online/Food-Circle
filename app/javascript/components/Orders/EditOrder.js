import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { BASE_URL } from '../../constants';
import BasicDashboard from '../dashboard/BasicDashboard';
import OrderForm from './OrderForm';
import { useLogin } from '../../helpers/useLogin';

const EditOrder = () => {
  const { id } = useParams();
  const [order, setOrder]=useState('');
  const [loading, setLoading]=useState(true);
  const token = useLogin()

  useEffect(() => {
    const getOrder = async () => {
      // fetch order data from server using id
      const url = `${BASE_URL}api/v2/orders/${id}`;
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
      console.log('token ' + token);
      getOrder();
    }
  },[token]);

  const handleSubmit = () =>{
    console.log('Clicked Or called handleSubmit');
  }

  return (
    <div>
      <BasicDashboard></BasicDashboard>
      <OrderForm handleSubmit={handleSubmit} data={order}/>
    </div>
  )
}

export default EditOrder
