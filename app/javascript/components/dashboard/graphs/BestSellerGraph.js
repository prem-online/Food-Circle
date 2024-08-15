import React , {useState, useEffect}from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Typography } from '@mui/material';
import axios from 'axios';
import {CURRENT_YEAR, PREVIOUS_YEAR} from '../../../constants'
import { useLogin } from '../../../helpers/useLogin';
import { V2 } from '../../../constants';
import { sleep } from '../../../helpers/common';
const BestSellerGraph = ({title, subtitle, graphData}) => {
  const xLabels = [ 'Jan', 'Feb','Mar','Apr', 'May', 'Jun', 'Jul', 'Aug','Sep','Oct','Nov','Dec',];

  const [labels, setLabels]=useState(['Product1', 'Product2', 'Product3'])

  const [label0, setLabel0] = useState('Product0')
  const [label1, setLabel1] = useState('Product1')
  const [label2, setLabel2] = useState('Product2')

  const [data0,setData0] = useState([2400, 1398, 9800, 3908, 4800, 3800, 2400, 1398, 9800, 3908, 4800, 3800])
  const [data1,setData1] = useState([1000, 2000, 1500, 3000, 2500, 2800, 1000, 2000, 1500, 3000, 2500, 2800])
  const [data2,setData2] = useState([1500, 3000, 2500, 2800, 2000, 1800, 1500, 3000, 2500, 2800, 2000, 1800])

  const token = useLogin();

  const getGraphLabel = async()=>{
    const url = `${V2}/graphs/bestsellers/labels`
    axios.get(url, {
      headers: {token: token},
    }).then(async(response)=>{
      setLabel0(response.data.data[0])
      setLabel1(response.data.data[1])
      setLabel2(response.data.data[2])
    }
  )};

  const getGraphData = async (name,callerIndex)=>{
    const url = `${V2}/graphs/bestsellers/sales/${name}`
    axios.get(url, {headers: {token: token}}).then((response)=>{
      switch (callerIndex) {
        case 1:
          setData1(response.data.data)
          break;
        case 2:
          setData2(response.data.data)
          break;
        default:
          setData0(response.data.data)
      }
    })
  };

  useEffect(()=>{
    if(token!= ''){
      getGraphLabel();
    }
  },[token])

  useEffect(()=>{
    if (label0 != 'Product0'){
      getGraphData(label0, 0);
    }

  },[label0])

  useEffect(()=>{
    if (label1!= 'Product1'){
      getGraphData(label1, 1);
    }
  },[label1]);

  useEffect(()=>{
    if (label2!= 'Product2'){
      getGraphData(label2,2);
    }
  },[label2]);
  return (
   <>
    <LineChart
        series={[
          { data: data0, label: label0 },
          { data: data1, label: label1 },
          { data: data2, label: label2 },

        ]}
        width={600}
        height={300}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        margin={{ left: 70 }}
      />

      <Typography mb={1} sx={{textAlign: 'center'}}>{title}</Typography>
      <Typography mb={1} sx={{textAlign: 'center', zIndex: -1}}>{subtitle}</Typography>
   </>
  );
};

export default BestSellerGraph;
