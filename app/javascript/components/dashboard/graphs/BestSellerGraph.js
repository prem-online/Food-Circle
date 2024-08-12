import React , {useState}from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Typography } from '@mui/material';
import {CURRENT_YEAR, PREVIOUS_YEAR} from '../../../constants'
const BestSellerGraph = ({title, subtitle, graphData}) => {
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
  const [[dataCurrentYear, dataLastYear], setGraphData] = useState(
    [[4000, 3000, 2000, 2780, 1890, 2390, 4000, 3000, 2000, 2780, 1890, 2390 ], 
    [2400, 1398, 9800, 3908, 4800, 3800, 2400, 1398, 9800, 3908, 4800, 3800, ]
  ],
  )
  const data1 = [240, 198, 92800, 908, 44800, 1800, 2440, 13345, 98320, 3234, 4110, 32343, ]
  return (
   <>
    <LineChart
        series={[
          { data: dataLastYear, label: '201412412423' },
          { data: dataCurrentYear, label: '20241fgdfgdfgdfgdfg' },
          { data: dataLastYear, label: '20dfgdgdfgdg23' },
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
