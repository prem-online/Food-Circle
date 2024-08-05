import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Typography } from '@mui/material';

export default function DashboardChart({title, subtitle}) {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 4000, 3000, 2000, 2780, 1890, 2390 ];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 2400, 1398, 9800, 3908, 4800, 3800, ];
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

  return (
    <>
      <LineChart
        series={[
          { data: pData, label: '2023' },
          { data: uData, label: '2024' },
        ]}
        width={500}
        height={300}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
      />

      <Typography mb={1} sx={{textAlign: 'center'}}>{title}</Typography>
      <Typography mb={1} sx={{textAlign: 'center', zIndex: -1}}>{subtitle}</Typography>
    </>
  );
}
