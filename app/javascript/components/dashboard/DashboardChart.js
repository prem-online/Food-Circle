import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Typography } from '@mui/material';
export default function DashboardChart({title}) {
  return (
    <>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
        series={[
          {
            data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
            showMark: ({ index }) => index % 2 === 0,
          },
        ]}
        width={500}
        height={300}
        margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
      
      />

      <Typography mb={1} sx={{textAlign: 'center'}}>{title}</Typography>
    </>
  );
}
