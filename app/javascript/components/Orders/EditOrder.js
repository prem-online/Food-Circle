import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { BASE_URL } from '../../constants';
import { useLogin } from '../../helpers/useLogin';
import UserDashboard from '../dashboard/UserDashboard';
import EditForm from './EditForm';

const EditOrder = () => {
  const { id } = useParams();
  const [loading, setLoading]=useState(true);
  const token = useLogin()
  const [order, setOrder]=useState('');

  useEffect(() => {
    const getOrder = async () => {
      // fetch order data from server using id
      const url = `${BASE_URL}api/v2/orders/${id}`;
      axios.get(url, { headers: { token: token } })
      .then(response => {
          setOrder(response.data.data);
          setLoading(false);
        })
      .catch((error) => {
          console.log('error ' + error);
        });
    };

    if (token != ''){
      getOrder();
    }
  },[token]);

  return (
    <div>
      <UserDashboard></UserDashboard>
      <EditForm data={order} id={id}/>
    </div>
  )
}

export default EditOrder
