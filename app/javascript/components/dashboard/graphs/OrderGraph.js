import React, {useEffect, useState} from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Typography } from '@mui/material';
import { useEffect } from 'react';
import axios from 'axios';
import { useLogin } from '../../../helpers/useLogin';
import { PREVIOUS_YEAR, V2, CURRENT_YEAR } from '../../../constants';
import { sleep } from '../../../helpers/common';
export default function OrderGraph({title, subtitle, graphData}) {
 
  const [[dataCurrentYear, dataLastYear], setGraphData] = useState(
    [[4000, 3000, 2000, 2780, 1890, 2390, 4000, 3000, 2000, 2780, 1890, 2390 ], 
    [2400, 1398, 9800, 3908, 4800, 3800, 2400, 1398, 9800, 3908, 4800, 3800, ]
  ],
  )
  const [allZero, setAllZero] = useState(true)

  const token = useLogin();
  useEffect(() => {
    if (token != '')
      { 
        getRequest(
          `graphs/${graphData}`, setGraphData
        )
      }

  }, [token]);

  const xLabels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const getRequest = async (url, setFunc) =>{
    await axios.get(V2+url, {headers: {token: token}})
   .then((response) => {
    const data = response.data.result
    const [previous_year_key, current_year_key] = Object.keys(data)
    const current_year = Object.values(data[current_year_key])
    const previous_year = Object.values(data[previous_year_key])
    setFunc([
      current_year,
      previous_year,
    ])
    setAllZero(previous_year.every(element => element === 0))
  })
   .catch((error)=>console.error(error))
  }
  const seriesData = ()=>{
    if(allZero){
      return [
        { data: dataCurrentYear, label: CURRENT_YEAR },
      ]
    }
    return [
      { data: dataCurrentYear, label: CURRENT_YEAR },
      { data: dataLastYear, label: PREVIOUS_YEAR },
    ]
  }
  return (
    <>
      <LineChart
        series={seriesData()}
        width={600}
        height={300}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        margin={{ left: 70 }}
      />

      <Typography mb={1} sx={{textAlign: 'center'}}>{title}</Typography>
      <Typography mb={1} sx={{textAlign: 'center', zIndex: -1}}>{subtitle}</Typography>
    </>
  );
}
